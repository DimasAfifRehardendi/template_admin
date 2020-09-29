<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 grid-margin stretch-card my-5 mx-5" style="padding-top:100px">
          <div class="card" style="margin-left:50px">
            <div class="card-body">
              <p class="card-title float-left"><b>Tabel Informasi</b></p>
              <p class="card-description float-right">
                <b-button variant="success" v-b-modal.modalTatib v-on:click="Add"><i class="mdi mdi-plus btn-icon-prepend"></i> Tambah</b-button>
              </p>
              <div class="table-responsive">
                <b-table striped hover :items="pelanggaran" :fields="fields">
                  <template v-slot:cell(Aksi)="data">
                    <b-button size="sm" variant="info" v-on:click="Edit(data.item)" v-b-modal.modalTatib><i class="mdi mdi-pencil btn-icon-prepend"></i> Ubah</b-button>&nbsp;
                    <b-button size="sm" variant="danger" v-on:click="Drop(data.item.id)"><i class="mdi mdi-delete btn-icon-prepend"></i> Hapus</b-button>
                  </template>
                </b-table>
                <b-pagination
                  v-model="currentPage"
                  :per-page="perPage"
                  :total-rows="rows"
                  align="center"
                  v-on:input="pagination">
                </b-pagination>

                <b-toast id="loadingToast" title="Processing Data" no-auto-hide>
                  <b-spinner label="Spinning" variant="success"></b-spinner>
                  <strong class="text-success">Loading...</strong>
                </b-toast>

                <!-- toast untuk tampilan message box -->
                <b-toast id="message" title="Message">
                  <strong class="text-success">{{ message }}</strong>
                </b-toast>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal 
      id="modalTatib"
      @ok="Save"
    >
      <template v-slot:modal-title>
        Form Informasi
      </template>
        <form ref="form">
          <div class="form-group">
            <label for="nama_wisata" class="col-form-label">Nama Wisata</label>
            <input type="text" name="nama_wisata" class="form-control" id="nama_wisata" placeholder="Nama Wisata" v-model="nama_wisata">
          </div>
          <div class="form-group">
            <label for="nama_jalan" class="col-form-label">Nama Jalan</label>
            <input type="text" name="nama_jalan" class="form-control" id="nama_jalan" placeholder="Nama Jalan" v-model="nama_jalan">
          </div>
          <div class="form-group">
            <label for="hari" class="col-form-label">Hari</label>
            <input type="text" name="hari" class="form-control" id="hari" placeholder="Hari" v-model="hari">
          </div>
          <div class="form-group">
            <label for="jam" class="col-form-label">Jam</label>
            <input type="text" name="jam" class="form-control" id="jam" placeholder="Jam" v-model="jam">
          </div>
          <div class="form-group">
            <label for="harga_tiket" class="col-form-label">Harga Tiket</label>
            <select class="form-control" name="harga_tiket" id="harga_tiket" v-model="harga_tiket">
              <option value="50K" checked>Rp.50.000,00</option>
              <option value="75K">Rp.75.000,00</option>
              <option value="100K">Rp.100.000,00</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cocok_untuk" class="col-form-label">Cocok Untuk</label>
            <input type="text" name="cocok_untuk" class="form-control" id="cocok_untuk" placeholder="Cocok Untuk" v-model="cocok_untuk">
          </div>
        </form>
    </b-modal>
  </div>
</template>