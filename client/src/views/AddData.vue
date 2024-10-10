<template>
  <main class="mt-3">
    <div class="container">
      <h2 class="text-center">등록</h2>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">이름</label>
        <div class="col-md-9">
          <input type="text" class="form-control"  v-model="person.name">
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">나이</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="number" class="form-control"  v-model="person.age">
            <span class="input-group-text">세</span>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label" >생일</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="date" v-model="person.birth">
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-dark" @click="gotoStudy();">돌아가기</button>
        </div>
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-danger" @click="addPerson();">저장하기</button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data(){
    return {
      person: {
        name: "",
        age: 0,
        birth: ""
      }
    };
  }, 
  beforeCreate(){}, 
  created(){}, 
  beforeMount(){}, 
  mounted(){}, 
  beforeUpdate(){}, 
  updated(){}, 
  beforeUnmount(){}, 
  unmounted(){}, 
  methods: {
    async gotoStudy() {
      this.$router.push({path:'/study'});
    },
    async addPerson() {
      if(this.person.name == "") {
        return this.$swal("이름은 필수 입력값입니다.");
      }

      if(this.person.age == "") {
        return this.$swal("나이는 필수 입력값입니다.")
      }

      if(this.person.birth == "") {
        return this.$swal("생일은 필수 입력값입니다.")
      }
      //swal -> sweet alert 예쁜 알림창
      this.$swal.fire({
        title: '정말 등록하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `등록`,
        cancelButtonText: `취소`
      }).then(async (result) => {
        if(result.isConfirmed) {
          await this.$api("/api/dataAdd", {param:[this.person]});
          this.$swal.fire('저장완료!', '', 'success');
          this.$router.push({path:'/study'});
        }
      })
    }
  }
}
</script>