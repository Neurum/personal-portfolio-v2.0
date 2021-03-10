<template>
  <div class="contact-section">
    <div>
      <h2 class="contact-header first-text">
        If you would like to know more . . .
      </h2>
      <form
        class="second-text"
        action="https://formspree.io/mlepaqqp"
        method="POST"
        id="contact-form fs-frm"
      >
        <fieldset id="fs-frm-inputs">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              placeholder="Name"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              name="_replyto"
              id=""
              aria-describedby="emailHelp"
              placeholder="Email"
              autocomplete="off"
            />
          </div>
          <div class="form-group text-area">
            <textarea
              class="form-control"
              name="message"
              id="textarea"
              rows="7"
              placeholder="Message"
              autocomplete="off"
            ></textarea>
          </div>
        </fieldset>
        <button type="submit" value="Send" class="btn">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-section {
  margin-top: 7rem;
  height: calc(100% - 15.5rem);
}
h2 {
  font-size: 3rem;
  padding-bottom: 7rem;
}
fieldset {
  border: none;
}
input {
  height: 3rem;
  width: 75%;
}
.text-area {
  width: 75%;
}
textarea {
  width: 100%;
}
.form-control {
  margin: 1rem 0;
  padding: 2rem 1rem;
}
.btn {
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  font-size: 2rem;
  font-family: inherit;
}
.btn:hover {
  background-color: #2f2f2f;
  color: #cacaca;
  cursor: pointer;
  border: 1px solid #cacaca;
}
.first-text {
  animation: fadein 2s;
}
.second-text {
  animation: fadeintwo 2s;
}
@media screen and (max-width: 700px) {
  .contact-section {
    text-align: center;
    height: 79%;
  }
  .text-area {
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  input,
  .text-area {
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .contact-section {
    height: 80%;
  }
}
</style>
