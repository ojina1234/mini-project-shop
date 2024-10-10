<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
  <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(dataone,i) in dataOne">
    신상정보
    <h1> 이름 : {{dataone.name}}</h1>
    <h1> 나이 : {{dataone.age}}</h1>
    <h1> 생일 : {{dataone.birth}}</h1>
  </div>
      </div>
      
    </div>
    <div>
      <h3>데이터 list</h3>
      <button type="button" class="btn btn-info me-1"  @click="gotoAdd();">추가</button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>나이</th>
            <th>생일</th>
            <th colspan="2"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(datalist,i) in dataList" :key="i">
            <td class="center">{{ i+1 }}</td>
            <td>{{ datalist.name }}</td>
            <td>{{ datalist.age }}</td>
            <td>{{ datalist.birth }}</td>
            <td class="center"><button type="button" class="btn btn-danger" @click="deleteData(datalist.name);">삭제</button></td>
            <td class="center"><button type="button" class="btn btn-danger" @click="editData(datalist);">수정</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="dataSelect">
      <h2>수정할 사용자 정보</h2>
      <form @submit.prevent="updatePerson">
        <label for="name">이름 : </label>
        <input type="text" v-model="dataSelect.name" id="name">
        <br>
        <label for="age">나이 : </label>
        <input type="number" v-model="dataSelect.age" id="age">
        <br>
        <label for="birth">생일 : </label>
        <input type="text" v-model="dataSelect.birth" id="birth">
        <br>
        <button type="submit">업데이트</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      search:'',
      productList: [],
      dataList: [],
      dataOne: {},
      dataSelect: {},
      preName:''
    };
  },
  created() {
    this.getProductList();
    this.getDataList();
    this.getDataOne();
  },
  methods: {
    async getProductList() {
      this.productList = await this.$api("/api/productList",{});
      console.log(this.productList);
    },
    async gotoAdd() {
      this.$router.push({path:'/addData'}); 
    },
    async getDataList() {
      this.dataList = await this.$api("/api/dataList",{});
      console.log(this.dataList);
    },
    async getDataOne() {
      this.dataOne = await this.$api("/api/dataOne",{param:"차은우"});
      console.log('this.dataOne',this.dataOne)
    },
    async deleteData(name) {
      this.$swal.fire({
        title: '정말 삭제하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `삭제`,
        cancelButtonText: `취소`
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log(name)
          await this.$api("/api/dataDel",{param:[name]});
          this.getDataList();
          this.$swal.fire('삭제되었습니다!', '', 'success')
        } 
      });
    },
    async editData(datalist) { //dataUpd
      this.dataSelect = {...datalist};
      this.preName = this.dataSelect.name;
    },
    async updatePerson() {
      if(this.dataSelect.name== "") {
        return this.$swal("이름은 필수 입력값입니다.");
      }
      if(this.dataSelect.age== "") {
        return this.$swal("이름은 필수 입력값입니다.");
      }
      if(this.dataSelect.birth== "") {
        return this.$swal("이름은 필수 입력값입니다.");
      }

      this.$swal.fire({
        title: '정말 수정하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `수정`,
        cancelButtonText: `취소`
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log(this.dataSelect.name);
          await this.$api("/api/dataUpd",{param:[this.dataSelect.name, this.dataSelect.age, this.dataSelect.birth, this.preName]});
          this.getDataList();
          this.dataSelect = {};
          this.$swal.fire('수정되었습니다!', '', 'success')
        } 
      });
    }
  }
}
</script>
<style coped>
table {
  width:100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
}

th {
  padding: 8px;
  text-align: center;
}

td {
  padding: 8px;
  text-align: left;
}

.center {
  text-align: center;
}

</style>