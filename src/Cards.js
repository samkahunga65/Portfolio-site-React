import React from "react";
import Card from "@material-ui/core/Card";

// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

export default function SimpleCard({ props }) {
  return (
    <Card
      style={
        props
          ? { padding: "0px", objectFit: "cover", height: "90%" }
          : {
              padding: "0px",
              objectFit: "cover",
              backgroundColor: "#2f4850",
              height: "90%",
              width: "30vw",
              margin: "auto",
            }
      }
    >
      <CardContent>
        {props ? <img src={props} alt="" /> : <img src="" alt=""></img>}
      </CardContent>
    </Card>
  );
}
