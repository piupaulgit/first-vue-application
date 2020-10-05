<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <span class="profile-img">
            <img v-bind:src="userInfo.avatar_url" />
          </span>
          <h1>{{ userInfo.name }}</h1>
          <h2>
            <a :href="userInfo.html_url" target="_blank"
              >@{{ userInfo.login }}
            </a>
          </h2>
          <p class="bio" v-if="userInfo.bio">{{ userInfo.bio }}</p>
        </div>
      </div>
      <div class="info-row">
        <span class="joined" v-if="userInfo.company"
          ><i class="fas fa-briefcase"></i> {{ userInfo.company }}</span
        >
        <span class="joined" v-if="userInfo.location"
          ><i class="fas fa-map-marker-alt"></i> {{ userInfo.location }}</span
        >
        <span class="joined" v-if="userInfo.created_at"
          ><i class="far fa-calendar-alt"></i> Joined on:
          {{ userInfo.created_at | formatDate }}</span
        >
      </div>
      <div class="extra-info row mt-5">
        <div class="col-md-8 mx-auto">
          <div class="row">
            <div class="col-md-4">
              <div class="each-info">
                <h3>{{ userInfo.public_repos }}</h3>
                <p>REPOSITORIES</p>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="each-info"
                data-toggle="modal"
                data-target="#exampleModal"
                v-on:click="showFollwers()"
              >
                <h3>{{ userInfo.followers }}</h3>
                <p>FOLLOWERS</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="each-info">
                <h3>{{ userInfo.following }}</h3>
                <p>FOLLOWING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-dark">
            <ul>
              <li v-for="follower in followers" :key="follower.id">
                <img v-bind:src="follower.avatar_url" />
                <p>{{ follower.login }}</p>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["userInfo"],
  data() {
    return {
      followers: [],
    };
  },
  mounted() {
    console.log(this.userInfo);
  },
  methods: {
    showFollwers() {
      this.axios
        .get(`${this.userInfo.followers_url}`)
        .then((res) => {
          this.followers = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
.header {
  background: #0d276b;
  padding: 100px 0;
  color: #fff;
}
.profile-img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: #fff;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  border: 2px solid #fff;
  margin-bottom: 20px;
}
.profile-img img {
  max-width: 100%;
}
h1 {
  font-size: 50px;
  margin-bottom: 10px;
}
h2 {
  color: #fff;
  margin-bottom: 10px;
}
h2 a {
  color: #23f5eb;
}
.bio {
  padding: 15px 0;
}
.joined {
  background: #060b4c;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  margin-top: 20px;
  margin-right: 10px;
  display: inline-block;
}
.joined i {
  margin-right: 5px;
}
.more-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
}
.each-info {
  background: #060b4c;
  border-radius: 5px;
  padding: 10px;
  min-width: 200px;
  min-height: 141px;
  margin-right: 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.each-info h3 {
  font-size: 40px;
  margin-bottom: 10px;
}
.each-info:last-child {
  margin-right: 0;
}
</style>
