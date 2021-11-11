import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Footer from "../Footer/Footer";

export default function About() {
  const paperStyle = {
    padding: 20,
    height: "100vh",
    width: 1111,
    margin: "30px auto",
    lineHeight: 2,
    backgroundColor: "#f5f5f5",
  };
  return (
    <div>
      <Grid>
        <Paper style={paperStyle}>
          <center style={{ color: "#23609e" }}>
            <h3 style={{ paddingBottom: "1rem" }}>
              {" "}
              Welcome to AIG Hospitals - where excellence is a way of life.{" "}
            </h3>
            AIG Hospitals is a unit of Asian Institute of Gastroenterology,
            India’s foremost Gastroenterology hospital. Spread across 1.4
            million sq.ft, AIG Hospitals is a state-of-the-art 800-bed super
            specialty Hospital, which is among the largest hospitals in the
            country today. <br /> <br /> Led by Dr. D Nageshwar Reddy, Chairman
            and Managing Director & Dr. G V Rao, Director, AIG Hospitals offers
            comprehensive healthcare services across 8 key Centres of Excellence
            – Medical & Surgical Gastroenterology, Liver Sciences, Organ
            Transplant, Pulmonary Sciences, Renal Sciences, Oncology, Cardiac
            Sciences, Obesity & Metabolic Therapy. <br /> <br /> The Hospital
            has been custom designed to undertake transplant surgeries including
            Liver, Kidney, Heart, Pancreas and Islet Cell. All the above
            services will be well supported by active Emergency and Critical
            Care services to ensure sick patients get the care they truly
            deserve. <br /> <br />
            Everything at AIG Hospitals is designed keeping in mind the comfort
            of our patients. The serene environment, spacious interiors and
            advanced facilities create a positive ambience that is conducive to
            healing. <br /> <br />
            <h4>VISION, MISSION & VALUES VISION </h4> <br />
            Excellence and Innovation to ensure best-in-class healthcare at
            affordable price MISSION At AIG Hospitals, our mission is to provide
            world-class healthcare to Indian and International patients whilst
            ensuring ‘inclusivity for all’ by: Utilizing our resources
            efficiently and effectively
          </center>
        </Paper>
      </Grid>
      <Footer />
    </div>
  );
}
