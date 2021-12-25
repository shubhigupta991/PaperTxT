import React from "react";
import "./App.css";
function Page1() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <img
            src="logo.png"
            alt="Avatar Logo"
            style="width:40px;"
            class="rounded-pill"
          />
        </div>
      </nav>
      <h1 class="hading-on-p1">PaperTxT.</h1>
      <p class="para-on-p1">
        AI would have abilities to read books, analyze them analytically and
        finally answer logical questions.
      </p>
      <div class="img2-on-p1">
        <imag src="img2-on-p1" />
      </div>
    </div>
  );
}
export default Page1;
