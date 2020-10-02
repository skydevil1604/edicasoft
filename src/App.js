import React from "react";
import Form from "./Form";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <div className="container-body">
        <div className="main-section">
          <div className="main-section__info">
            <p className="main-section__paragraph">
              GET STARTED WITHIN 2 MINUTES
            </p>
            <h1 className="main-section__header">
              Learn How To Bake In 5 Easy Steps
            </h1>
            <h3 className="main-section__description">
              No doubt, you need more one pot dinners in your life like this
              easy Bosnian-style chicken and rice. This recipe is made all over
              the world with countless variations on the theme.
            </h3>
          </div>
          <div className="main-section__image"></div>

          <Form />
        </div>
      </div>
      <div className="container-body container-body--white-background">
        <div className="first-feature">
          <div className="first-feature__photo"></div>
          <div className="first-feature__info">
            <h2 className="first-feature__header">
              Do you know how to level a cake?
            </h2>
            <p className="first-feature__description">
              After years of cake successes and flops, I’m confident in this
              homemade vanilla cake. During my recipe testing, I combined my
              white cake recipe and naked cake recipe. These are two reader
              favorites and I knew they’d be the best starting point.
            </p>
          </div>
        </div>
      </div>
      <div className="container-body container-body--white-background">
        <div className="second-feature">
          <div className="second-feature__info">
            <h2 className="second-feature__header">
              Vanilla Cake Success Tips
            </h2>
            <p className="second-feature__description">
              I always eyeball the amount of frosting between cake layers, but I
              measured when I decorated the pictured cake. The vanilla
              buttercream recipe below yields about 6 cups of frosting. I
              recommend you use about 1.5 heaping cups of buttercream between
              each cake layer and reserve the last 3 cups for outside the cake.
            </p>
          </div>
          <div className="second-feature__photo"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
