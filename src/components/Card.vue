<template>
  <div class="skills-card-content">
    <div class="card">
      <div class="card-header">
        <h3 class="first-text">Front-end Skills</h3>
      </div>
      <div class="icon-container">
        <img
          class="html"
          src="../assets/images/iconfinder_5352_-_HTML5_1313567.svg"
        />
        <img class="css" src="../assets/images/iconfinder_css3_2916226.svg" />
        <img class="js" src="../assets/images/javascript-seeklogo.com.svg" />
        <img class="bs" src="../assets/images/bootstrap-seeklogo.com.svg" />
        <img
          class="twcss"
          src="../assets/images/tailwind-css-seeklogo.com.svg"
        />
        <img
          class="sass"
          src="../assets/images/iconfinder_288_Sass_logo_4375066.svg"
        />
        <img
          class="react"
          src="../assets/images/iconfinder_React.js_logo_1174949.svg"
        />
        <img
          class="vue"
          src="../assets/images/iconfinder_367_Vuejs_logo_4375161.svg"
        />
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h3 class="first-text">Back-end Skills</h3>
      </div>
      <div class="icon-container">
        <img
          class="node"
          src="../assets/images/node-node-js-seeklogo.com.svg"
        />
        <img
          class="express"
          src="../assets/images/express-js-seeklogo.com.svg"
        />
        <img class="mongo" src="../assets/images/mongodb-seeklogo.com.svg" />
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h3 class="first-text">Tools</h3>
      </div>
      <div class="icon-container">
        <img class="git" src="../assets/images/git-seeklogo.com.svg" />
        <img class="github" src="../assets/images/github-seeklogo.com.svg" />
        <img class="npm" src="../assets/images/npm-node-package-manager.svg" />
        <img class="webpack" src="../assets/images/webpack-seeklogo.com.svg" />
        <img class="babel" src="../assets/images/babel-seeklogo.com.svg" />
        <img class="heroku" src="../assets/images/heroku-seeklogo.com.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  padding: 1rem 0;
  font-size: 2.5rem;
}

img {
  width: 5rem;
  transition: transform 0.2s ease-in-out;
}

img:hover {
  transform: scale(1.25);
}

.heroku {
  width: 4rem;
}

.git,
.github,
.webpack {
  width: 6rem;
}

.html {
  width: 7rem;
}

.node,
.npm {
  width: 8.5rem;
}

.express,
.babel {
  width: 9.5rem;
}

.mongo {
  width: 12rem;
}

.center-icon-text {
  display: flex;
  flex-direction: column;
}

.icon-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  padding-bottom: 1.5rem;
}

.skills-card-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 85%;
  background-color: #cacaca;
  color: #2f2f2f;
  height: 15rem;
  border-radius: 5px;
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.7);
  margin-top: 5rem;
}

.card-header {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #2f2f2f;
  width: 100%;
}
.first-text {
  animation: fadein 2s;
}

@media screen and (max-width: 700px) {
  h3 {
    font-size: 1.75rem;
  }
  .card {
    width: 100%;
  }
  .heroku {
    width: 3rem;
  }

  .css,
  .js,
  .bs,
  .twcss,
  .sass,
  .react,
  .vue {
    width: 4rem;
  }

  .git,
  .github,
  .webpack {
    width: 5rem;
  }

  .html {
    width: 6rem;
  }

  .node,
  .npm {
    width: 7.5rem;
  }

  .express,
  .babel {
    width: 8.5rem;
  }

  .mongo {
    width: 11rem;
  }
}

@media screen and (max-width: 510px) {
  .icon-container {
    flex-wrap: wrap;
  }
  img {
    margin: 1rem 3rem;
    width: 4rem;
  }
  .card {
    height: 18rem;
    margin-top: 3rem;
  }
  .skills-card-content {
    padding-top: 1rem;
  }
}
</style>
