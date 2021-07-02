import React from "react";
import "./notfound.css";

// const useStyles = makeStyles((theme) => ({
//   section_mainstartpage: {
//     backgroundColor: "#05264c",
//     display: "grid",
//     alignItems: "center",
//     width: "100%",
//     height: "100vh",
//   },
//   paperStartPage: {
//     display: "flex",
//     zIndex: "1",
//     textAlign: "center",
//     flexDirection: "column",
//     fontSize: "20px",
//     padding: theme.spacing(3),
//   },
// }));
const NotFoundPage = () => {
  // const classes = useStyles();

  return (
    <>
      <svg
        className="svgNotfound"
        width="380px"
        height="500px"
        viewBox="0 0 837 1045"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          sketchtype="MSPage"
        >
          <path
            d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
            id="Polygon-1"
            stroke="#007FB2"
            strokeWidth="6"
            sketchtype="MSShapeGroup"
          ></path>
          <path
            d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
            id="Polygon-2"
            stroke="#EF4A5B"
            strokeWidth="6"
            sketchtype="MSShapeGroup"
          ></path>
          <path
            d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
            id="Polygon-3"
            stroke="#795D9C"
            strokeWidth="6"
            sketchtype="MSShapeGroup"
          ></path>
          <path
            d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
            id="Polygon-4"
            stroke="#F2773F"
            strokeWidth="6"
            sketchtype="MSShapeGroup"
          ></path>
          <path
            d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
            id="Polygon-5"
            stroke="#36B455"
            strokeWidth="6"
            sketchtype="MSShapeGroup"
          ></path>
        </g>
      </svg>
      <div className="message-box">
        <div className="buttons-con">
          <div className="action-link-wrap">
            <a href="/login" className="btn">
              <span className="btn__circle"></span>
              <span className="btn__white-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="icon-arrow-right"
                  viewBox="0 0 21 12"
                >
                  <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                </svg>
              </span>
              <span className="btn__text">Discover the project</span>
            </a>
            {/* <Button className="flex" variant="primary" size="lg">
              <Link to="/login">
                Get Started
                <TouchAppIcon className="touchicon" />
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
      {/* <section className={classes.section_mainstartpage}>
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paperStartPage}>
            <Button variant="primary" size="lg">
              <Link to="/login">Get Started</Link>
            </Button>
          </Paper>
        </Container>
      </section> */}
    </>
  );
};

export default NotFoundPage;
