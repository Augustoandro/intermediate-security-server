import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../ducks/auth.duck";
import { makeStyles, Container, Avatar, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { SignupForm } from "../../forms";
// import ParticlesBg from "particles-bg";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100vh",
    width: "100%",
    display: "grid",
    alignItems: "center",
  },
  paper: {
    padding: "30px",
    backgroundColor: "white",
    zIndex: "1",
    display: "flex",
    boxShadow: "0px 5px 40px rgba(0, 0, 0,0.5)",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const SignupPage = (props) => {
  const dispatch = useDispatch();
  const { signupInProgress, signupError } = useSelector((state) => state.auth);
  const classes = useStyles();

  const handleSubmit = (values) => {
    const { history } = props;
    dispatch(signup(values))
      .then(() => history.push("/profile"))
      .catch(() => {
        /*Already handled */
      });
  };

  return (
    <>
      {/* <Animate /> */}
      <section>
        <Container component="main" maxWidth="xs" className={classes.section}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <SignupForm
              onSubmit={handleSubmit}
              inProgress={signupInProgress}
              onError={signupError}
            />
          </div>
        </Container>
      </section>
      {/* <ParticlesBg type="lines" bg={true} /> */}
    </>
  );
};

export default SignupPage;
