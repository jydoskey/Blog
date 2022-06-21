<template>
  <div class="blog border-0">
    <div class="blog-main">
      <div class="blog-sub">
        <div class="section-img">
          <img
            class="section-logo"
            src="@/assets/images/Brandmark.svg"
            alt="logo"
          />
          <div class="section-text">
            <h1 class="blog-header">Unlock the creative energy to create</h1>
            <p class="blog-text">
              Blogit is a platform designed to enable you reduce a busywork
              flow, so as to get focused on what matters.
            </p>
          </div>
        </div>
        <div>
          <section class="blog-form">
            <div class="form-body" v-if="signin">
              <div class="max-w-md w-full space-y-8">
                <div>
                  <h2 class="mt-6 text-left text-3xl font-bold text-gray-900">
                    Log in
                  </h2>
                  <div class="font-medium">
                    or
                    <span
                      class="!text-[#00C2EF] cursor-pointer"
                      @click="signUp()"
                      >sign up to create an account</span
                    >
                  </div>
                </div>
                <form class="mt-8 space-y-6" @submit="submit($event)">
                  <input type="hidden" name="remember" value="true" />
                  <div class="-space-y-px">
                    <div class="mb-5">
                      <label for="email-address" class="sr-only"
                        >Email address</label
                      >
                      <input
                        v-model="email"
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        class="form-input"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label for="password" class="sr-only">Password</label>
                      <input
                        v-model="password"
                        id="password"
                        name="password"
                        type="password"
                        required
                        class="form-input"
                        placeholder="Password"
                      />
                    </div>
                    <div class="flex justify-between pt-6">
                      <label class="block text-gray-500 font-bold items-center">
                        <input class="mr-2" type="checkbox" />
                        <span class="text-sm"> Remember password </span>
                      </label>
                      <label class="block text-gray-500 font-bold">
                        <span class="text-sm"> Forgot password? </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <button type="submit" class="form-button">Log in</button>
                  </div>
                </form>
              </div>
            </div>

            <div class="form-body" v-else-if="signup">
              <div class="max-w-md w-full space-y-8">
                <div>
                  <h2 class="mt-6 text-left text-3xl font-bold text-gray-900">
                    Sign up
                  </h2>
                  <div class="font-medium">
                    or
                    <span
                      class="!text-[#00C2EF] cursor-pointer"
                      @click="signIn()"
                      >log in to your account</span
                    >
                  </div>
                </div>
                <form class="mt-8 space-y-6" @submit="submit($event)">
                  <input type="hidden" name="remember" value="true" />
                  <div class="mb-5">
                    <label for="firstname" class="sr-only">First name</label>
                    <input
                      v-model="firstname"
                      name="firstname"
                      type="text"
                      required
                      class="form-input"
                      placeholder="First name"
                    />
                  </div>
                  <div class="my-5">
                    <label for="lastname" class="sr-only">Last name</label>
                    <input
                      v-model="lastname"
                      name="lastname"
                      type="text"
                      required
                      class="form-input"
                      placeholder="Last name"
                    />
                  </div>
                  <div class="mt-5 mb-5">
                    <label for="email-address" class="sr-only"
                      >Email address</label
                    >
                    <input
                      v-model="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      class="form-input"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <div class="flex flex-wrap -mx-3">
                      <div class="w-full md:w-1/2 px-3">
                        <label for="password" class="sr-only">Password</label>
                        <input
                          v-model="password"
                          name="password"
                          type="password"
                          required
                          class="form-input"
                          placeholder="Password"
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3 md:pt-0 pt-6">
                        <label for="password" class="sr-only">Password</label>
                        <input
                          v-model="password"
                          name="password"
                          type="password"
                          required
                          class="form-input"
                          placeholder="Confirm password"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <label class="block text-gray-500 font-bold items-center">
                      <input class="mr-2" type="checkbox" required />
                      <span class="text-sm"
                        >Agree to our
                        <span class="!text-[#00C2EF] cursor-pointer">
                          Terms</span
                        >
                        and
                        <span class="!text-[#00C2EF] cursor-pointer"
                          >Conditions</span
                        ></span
                      >
                    </label>
                  </div>
                  <div>
                    <button type="submit" class="form-button">Sign up</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {
      signin: true,
      signup: false,
      email: "",
      firstname: "",
      lastname: "",
      gender: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      this.signin = true;
      this.signup = false;
    },
    signUp() {
      this.signin = false;
      this.signup = true;
    },
    submit(event) {
      event.preventDefault();
      var payload = {
        email: this.email,
        name: this.firstname + this.lastname,
        gender: this.gender,
      };
      this.axios
        .post(
          "https://gorest.co.in/public/v2/users?access-token=7eab42576030ef17df54e3bef10de95d141a5bfa63dedd051f914fa74da12dfb",
          payload
        )
        .then((response) => {
          if (response.status === 200) {
            (this.email = ""),
              (this.firstname = ""),
              (this.lastname = ""),
              (this.gender = "");
            this.$router.push("/todocomment");
          } else {
            //
          }
        });
    },
  },
};
</script>

<style scoped>
* {
  @apply text-[#2E3333];
  box-sizing: border-box;
}

.blog {
  @apply h-screen bg-no-repeat w-full block text-center justify-center bg-white;
}

.blog-main {
  @apply bg-white items-center md:pt-0 pt-4;
}

.blog-sub {
  @apply text-left bg-white grid-cols-1 lg:grid-cols-[54rem_minmax(15em,_1fr)] grid;
  margin: 0 auto;
}

.blog-form {
  @apply lg:px-12 px-4;
}

.section-logo {
  @apply h-24 px-16 mt-12;
}

.section-img {
  @apply lg:block hidden bg-[#E6FBFF] bg-[url('@/assets/images/Background.svg')] h-screen bg-cover w-full;
}

.section-text {
  @apply absolute bottom-0 left-0 pb-20;
}

.blog-header {
  @apply text-[white] text-7xl font-bold pb-16 px-16 w-[50rem] text-left;
}

.blog-text {
  @apply text-[white] text-xl w-[31rem] text-left px-16;
}

.form-body {
  @apply min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8;
}

.form-input {
  @apply rounded-xl h-[3.5rem] px-6 focus:outline-none text-sm bg-[#F1F7FE] text-[#AAAAAA] appearance-none relative 
  block w-full py-2 focus:border placeholder-gray-500 focus:bg-[white] focus:ring-[#B8CADE] focus:border-[#B8CADE] focus:z-10;
}

input::placeholder {
  @apply text-[#AAAAAA];
}

.form-button {
  background: transparent
    linear-gradient(
      270deg,
      #00c2ef 0%,
      #00baef 9%,
      #00a7f1 18%,
      #0087f3 44%,
      #005bf7 88%,
      #0047f9 100%
    )
    0% 0% no-repeat padding-box;
  @apply relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-xl text-white cursor-pointer;
}

.form-button:hover {
  background: #0047f9;
}
</style>