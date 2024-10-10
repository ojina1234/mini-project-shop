<template>
  <div>Hello world!</div>
  <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(datalist,i) in dataList">
    <h1> 이름 : {{datalist.name}}</h1>
    <h1> 나이 : {{datalist.age}}</h1>
    <h1> 생일 : {{datalist.birth}}</h1>
  </div>

  <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(dataone,i) in dataOne">
    신상정보
    <h1> 이름 : {{dataone.name}}</h1>
    <h1> 나이 : {{dataone.age}}</h1>
    <h1> 생일 : {{dataone.birth}}</h1>
  </div>

</template>
<script>
export default {
  data() {
    return {
      dataList: [],
      dataOne: []
    };
  },
  created() {
    this.getDataList();
    this.getDataOne();
  },
  methods: {
    async getDataList() {
      this.dataList = await this.$api("/api/dataList",{});
      console.log(this.dataList);
    },
    async getDataOne() {
      this.dataOne = await this.$api("/api/dataOne",{param:"차은우"});
      console.log('this.dataOne',this.dataOne)
    }
  }
}

</script>