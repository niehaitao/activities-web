import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";

import Loading from "./Loading";

export default function App(props) {
  const { REACT_APP_API_URL, REACT_APP_GIT_HASH, REACT_APP_BUILD } = process.env;
  const [page, setPage] = useState({ loading: true, title: `Loading...` });
  const [activities, setActivities] = useState({ create: "", update: "", delete: "" });

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    setActivities({ create: "", update: "", delete: "" });
    setPage({ loading: true, title: "Loading..." });
    await fetch(REACT_APP_API_URL)
      .then((res) => {
        if (!res.ok) throw Error("Error coming back from " + REACT_APP_API_URL);
        return res.json();
      })
      .then((dataFromServer) => {
        setActivities(dataFromServer);
        setPage({ loading: false, title: "Activities" });
      })
      .catch((err) => {
        setActivities({});
        setPage({ loading: false, title: err.message });
      });
  };

  return (
    <div className={`activities ${css(styles.content_box, styles.content_box_layout)}`}>
      <Title title={page.title} />
      <div className={css(styles.flex, styles.flex_layout3)}>
        <div className={css(styles.flex_col)}>
          <div className={css(styles.flex1, styles.flex1_layout)}>
            <Create count={activities.create} />
            <Update count={activities.update} />
            <Delete count={activities.delete} />
          </div>
        </div>
        <div className={css(styles.flex_spacer)} />
        <Home />
      </div>

      <div className={css(styles.flex5, styles.flex5_layout)}>
        <Env name={"GIT"} value={REACT_APP_GIT_HASH} />
        <Env name={"Build"} value={REACT_APP_BUILD} />

      </div>
    </div>
  );

  function Env({ name, value }) {
    return (
      <div className={css(styles.flex, styles.flex_layout5)}>
        <div className={css(styles.flex7_col)}>
          <div className={css(styles.cover_group4, styles.cover_group4_layout)}>
            <h4 className={css(styles.build, styles.build_layout)}>{name}</h4>
          </div>
        </div>
        <div className={css(styles.flex7_spacer)} />
        <h4 className={css(styles.highlights4, styles.highlights4_layout)}>{value}</h4>
      </div>
    );
  }

  function Home() {
    return page.loading ? <Loading size={30} /> :<Icon/> ;
  }

  function Icon() {
    return <div
      style={{
        "--src": `url(${require("assets/491b88590a73ac69cf2de0618bececd9.png")})`,
      }}
      className={css(styles.icon, styles.icon_layout, styles.clickable)}
      onClick={() => fetchActivities()} />;
  }

  function Delete({ count }) {
    return (
      <div className={css(styles.flex, styles.flex_layout2)}>
        <h4 className={css(styles.delete, styles.delete_layout)}>{"Delete"}</h4>
        <div className={css(styles.flex4_spacer)} />
        <div className={css(styles.flex4_col)}>
          <div className={css(styles.cover_group2, styles.cover_group2_layout)}>
            <h4 className={css(styles.highlights, styles.highlights_layout)}>{count}</h4>
          </div>
        </div>
      </div>
    );
  }

  function Update({ count }) {
    return (
      <div className={css(styles.flex, styles.flex_layout1)}>
        <h4 className={css(styles.update, styles.update_layout)}>{"Update"}</h4>
        <div className={css(styles.flex3_spacer)} />
        <div className={css(styles.flex3_col)}>
          <div className={css(styles.cover_group1, styles.cover_group1_layout)}>
            <h4 className={css(styles.highlights, styles.highlights_layout)}>{count}</h4>
          </div>
        </div>
      </div>
    );
  }

  function Create({ count }) {
    return (
      <div className={css(styles.flex, styles.flex_layout)}>
        <h4 className={css(styles.create, styles.create_layout)}>{"Create"}</h4>
        <div className={css(styles.flex2_spacer)} />
        <div className={css(styles.flex2_col)}>
          <div className={css(styles.cover_group, styles.cover_group_layout)}>
            <h4 className={css(styles.highlights, styles.highlights_layout)}>{count}</h4>
          </div>
        </div>
      </div>
    );
  }

  function Title({ title }) {
    return <h1 className={css(styles.activities, styles.activities_layout)}>{title}</h1>;
  }
}

const styles = StyleSheet.create({
  clickable: {
    cursor: "pointer",
    userSelect: "none",
    transition: "opacity 0.2s",
    ":hover": { opacity: 0.7 },
  },
  content_box: {
    display: "flex",
    flexDirection: "column",
    background: "var(--src) center center / cover no-repeat",
    backgroundColor: "rgb(255,255,255)",
  },
  content_box_layout: {
    position: "relative",
    overflow: "hidden",
    minHeight: 290,
    flexGrow: 1,
    margin: 0,
  },
  activities: {
    font: '500 35px/1.2 "Lato", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  activities_layout: {
    position: "relative",
    flex: "0 0 auto",
    margin: "20px 20px 0px",
  },
  flex: {
    display: "flex",
  },
  flex_layout3: {
    position: "relative",
    overflow: "visible",
    flex: "0 0 auto",
    margin: "20px 19px 0px 20px",
  },
  flex_col: {
    display: "flex",
    flex: "0 1 150px",
  },
  flex1: {
    display: "flex",
    flexDirection: "column",
  },
  flex1_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
  },
  flex_layout: {
    position: "relative",
    overflow: "visible",
    margin: 0,
  },
  create: {
    display: "flex",
    alignItems: "center",
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(59,66,112)",
    letterSpacing: "0px",
  },
  create_layout: {
    position: "relative",
    margin: "2px 0px",
  },
  flex2_spacer: {
    display: "flex",
    flex: "0 1 23px",
  },
  flex2_col: {
    display: "flex",
    flex: "0 1 70px",
  },
  cover_group: {
    display: "flex",
    backgroundColor: "rgb(252,172,76)",
    borderRadius: "10px 10px 10px 10px",
  },
  cover_group_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 25,
    flexGrow: 1,
    margin: 0,
  },
  highlights: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    font: '500 18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "right",
    letterSpacing: "0px",
  },
  highlights_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "2px 11.46px",
  },
  flex_layout1: {
    position: "relative",
    overflow: "visible",
    margin: "15px 0px 0px",
  },
  update: {
    display: "flex",
    alignItems: "center",
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(59,66,112)",
    letterSpacing: "0px",
  },
  update_layout: {
    position: "relative",
    margin: "2px 0px",
  },
  flex3_spacer: {
    display: "flex",
    flex: "0 1 18px",
  },
  flex3_col: {
    display: "flex",
    flex: "0 1 70px",
  },
  cover_group1: {
    display: "flex",
    backgroundColor: "rgb(80,210,198)",
    borderRadius: "10px 10px 10px 10px",
  },
  cover_group1_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 25,
    flexGrow: 1,
    margin: 0,
  },
  flex_layout2: {
    position: "relative",
    overflow: "visible",
    margin: "15px 0px 0px",
  },
  delete: {
    display: "flex",
    alignItems: "center",
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(59,66,112)",
    letterSpacing: "0px",
  },
  delete_layout: {
    position: "relative",
    margin: "2px 0px",
  },
  flex4_spacer: {
    display: "flex",
    flex: "0 1 24px",
  },
  flex4_col: {
    display: "flex",
    flex: "0 1 70px",
  },
  cover_group2: {
    display: "flex",
    backgroundColor: "rgb(242,121,183)",
    borderRadius: "10px 10px 10px 10px",
  },
  cover_group2_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 25,
    flexGrow: 1,
    margin: 0,
  },
  flex_spacer: {
    display: "flex",
    flex: "0 1 20px",
  },
  icon: {
    background: "var(--src) center center / contain no-repeat",
  },
  icon_layout: {
    position: "relative",
    flex: "0 1 105px",
    height: 105,
    width: 105,
    minWidth: 105,
    margin: 0,
  },
  flex5: {
    display: "flex",
    flexDirection: "column",
  },
  flex5_layout: {
    position: "relative",
    overflow: "visible",
    flex: "0 0 auto",
    margin: "20px 40px 18px 20px",
  },
  flex_layout5: {
    position: "relative",
    overflow: "visible",
    margin: "15px 0px 0px",
  },
  flex7_col: {
    display: "flex",
    flex: "0 1 60px",
  },
  cover_group4: {
    display: "flex",
    backgroundColor: "rgb(23,119,255)",
    borderRadius: "10px 10px 10px 10px",
  },
  cover_group4_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 25,
    flexGrow: 1,
    margin: 0,
  },
  build: {
    display: "flex",
    justifyContent: "center",
    font: '500 18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  build_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "2px 6.78px 2px 7.22px",
  },
  flex7_spacer: {
    display: "flex",
    flex: "0 1 20px",
  },
  highlights4: {
    font: '500 18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  highlights4_layout: {
    position: "relative",
    margin: "2px 0px",
  },
});
