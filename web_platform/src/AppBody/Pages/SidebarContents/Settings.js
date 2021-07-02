import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  section_settings: {
    display: "grid",
    placeItems: "center",
    width: "auto",
    // backgroundColor: "red",
    height: "100vh",
  },

  input: {
    "& > *": {
      margin: "10px 0px",
      width: "100%",
    },
  },
  input_div: {
    display: "flex",
    flexDirection: "column",
  },

  paper_style: {
    width: "450px",
    padding: "20px 30px",
    height: "auto",
  },
  upload_button: {
    overflow: "hidden",
    outline: "none",
    border: "none",
  },
  span: {
    color: "red",
  },
}));

export default function Settings() {
  const [Email, setEmail] = useState();
  const [BucketName, setBucketName] = useState();
  const [Accesskey, setAccesskey] = useState();
  const [Secretkey, setSecretkey] = useState();

  const submitHandle = () => {
    axios
      .post("http://localhost:3001/api/insert", {
        v_email: Email,
        bucket_name: BucketName,
        v_access_key_id: Accesskey,
        v_secret_key: Secretkey,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    window.alert("Successfully Sent");
  };

  //STYLE CLASS//
  const classes = useStyles();
  const pageZoom = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 0.95,
    },
  };
  const pageTransition = {
    type: "tween",
    duration: 0.3,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition}
    >
      <section className={classes.section_settings} id="settings">
        <div>
          <Paper className={classes.paper_style} elevation={3}>
            <form action="#">
              <div className={classes.input_div}>
                <label htmlFor="Email">
                  Email ID<span className={classes.span}>*</span>
                </label>
                <TextField
                  label="email"
                  variant="outlined"
                  className={classes.input}
                  type="text"
                  id="Email"
                  onChange={(event) => {
                    const { value } = event.target;
                    setEmail(value);
                  }}
                />
              </div>
              <div className={classes.input_div}>
                <label htmlFor="URL">
                  Bucket Name<span className={classes.span}>*</span>
                </label>
                <TextField
                  label="bucket-name"
                  variant="outlined"
                  className={classes.input}
                  type="text"
                  id="URL"
                  onChange={(event) => {
                    const { value } = event.target;
                    setBucketName(value);
                  }}
                />
              </div>
              <div className={classes.input_div}>
                <label htmlFor="Email">
                  Access Key<span className={classes.span}>*</span>
                </label>
                <TextField
                  label="a-key"
                  variant="outlined"
                  className={classes.input}
                  type="text"
                  id="AccessKey"
                  onChange={(event) => {
                    const { value } = event.target;
                    setAccesskey(value);
                  }}
                />
              </div>
              <div className={classes.input_div}>
                <label htmlFor="Email">
                  Secret Key<span className={classes.span}>*</span>
                </label>
                <TextField
                  label="s-key"
                  variant="outlined"
                  className={classes.input}
                  type="text"
                  id="SecretKey"
                  onChange={(event) => {
                    const { value } = event.target;
                    setSecretkey(value);
                  }}
                />
              </div>
              {/* <div className={classes.input_div}>
                <label htmlFor="file">
                  Upload <span className={classes.span}>JSON</span> file for
                  check<span className={classes.span}>*</span>
                </label>
                <TextField
                  variant="outlined"
                  className={classes.input}
                  type="file"
                  name="image"
                  accept="image/*"
                  multiple={false}
                />
              </div> */}
            </form>
            <Button
              variant="contained"
              color="default"
              className={classes.upload_button}
              startIcon={<CloudUploadIcon />}
              onClick={submitHandle}
            >
              Send
            </Button>
          </Paper>
        </div>
      </section>
    </motion.div>
  );
}
