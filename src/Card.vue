<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card-container">
            <h1 class="display-4 text-center">Welcome to PromptXYZ</h1>
            <p class="lead">
              PromptXYZ is a repository of prompts designed for AI, containing a wide variety of prompts. By using different prompts, you can achieve different functions with AI or create different AI drawings.
            </p>
            <p class="lead">
              Our service is a one-time payment, initially priced at $9.9 for early bird pricing. Subscribe now to enjoy early bird free of charge, and you will be notified as soon as development is completed.
            </p>
            <div class="input-group mb-3">
              <input type="email" class="form-control" v-model="email" placeholder="name@example.com" aria-label="Email" aria-describedby="subscribe-btn">
              <button @click="submitForm" class="btn btn-outline-secondary" type="button" id="subscribe-btn">Subscribe</button>
            </div>
            <p v-if="message" class="mt-3 text-center">{{ message }}</p>
          </div>
        </div>
      </div>
      <footer class="text-center">
        <small style="color: aliceblue;">Powered by GPT-4</small>
      </footer>
    </div>
  </template>
  
  

           
  
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async submitForm() {
      if (this.email) {
        try {
          await axios.post("/api/subscribe", { email: this.email });
          alert("订阅成功！");
        } catch (error) {
          console.error("订阅失败：", error);
          alert("订阅失败，请稍后再试。");
        }
      }
    },
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #57c1e8 0%, #246fa8 100%);
  font-family: "Montserrat", sans-serif;
}

.card-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  max-width: 800px; 
}

.display-4 {
  font-weight: 700;
  color: #246fa8;
  text-align: center;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
  color: #4a4a4a;
  text-align: left;
}

.form-control {
  border: 1px solid #246fa8;
  border-radius: 0;
  height: 50px;
}

.btn {
  border: 1px solid #246fa8;
  background-color: #246fa8;
  color: #fff;
  border-radius: 0;
  height: 50px;
}

.btn:hover {
  background-color: #195a8a;
}

footer {
  position: absolute;
  bottom: 10px;
  font-size: 0.75rem;
}
</style>



