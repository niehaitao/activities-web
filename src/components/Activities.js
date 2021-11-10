import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";

export default function Activities(props) {
  const [activities, setActivities] = useState([]);
  const { REACT_APP_MY_ENV, VERSION } = process.env;

  useEffect(() => {
    const getActivities = async () => {
      const activitiesFromServer = await fetchActivities();
      setActivities(activitiesFromServer);
    };

    getActivities();
  }, []);

  // Fetch Tasks
  const fetchActivities = async () => {
    const res = await fetch("http://localhost:5000/metrics");
    const data = await res.json();

    return data.activities;
  };

  return (
    <div className={`activities ${css(styles.flex, styles.flex_layout)}`}>
      <div className={css(styles.group, styles.group_layout)}>
        <div className={css(styles.flex1, styles.flex1_layout)}>
          <div className={css(styles.flex1_col)}>
            <div className={css(styles.flex2, styles.flex2_layout)}>
              <h1 className={css(styles.activities, styles.activities_layout)}>{"Activities"}</h1>

              <Create count={activities.create} />
              <Update count={activities.update} />
              <Delete count={activities.delete} />

            </div>
            <h1 className={css(styles.activities, styles.activities_layout)}>{REACT_APP_MY_ENV}</h1>

          </div>



        </div>

      </div>
    </div>
  );

  function Delete({ count }) {
    return (
      <div className={css(styles.flex5, styles.flex5_layout)}>
        <h4 className={css(styles.deletion, styles.deletion_layout)}>{"Delete"}</h4>
        <div className={css(styles.flex5_col)}>
          <div className={css(styles.cover_group2, styles.cover_group2_layout)}>
            <h4 className={css(styles.highlights, styles.highlights_layout)}>{count}</h4>
          </div>
        </div>
      </div>
    );
  }

  function Update({ count }) {
    return (
      <div className={css(styles.flex4, styles.flex4_layout)}>
        <h4 className={css(styles.update, styles.update_layout)}>{"Update"}</h4>
        <div className={css(styles.flex4_col)}>
          <div className={css(styles.cover_group1, styles.cover_group1_layout)}>
            <h4 className={css(styles.highlights, styles.highlights_layout)}>{count}</h4>
          </div>
        </div>
      </div>
    );
  }

  function Create({ count }) {
    return (
      <div className={css(styles.flex3, styles.flex3_layout)}>
        <h4 className={css(styles.creation, styles.creation_layout)}>{"Create"}</h4>
        <div className={css(styles.flex3_col)}>
          <div className={css(styles.cover_group, styles.cover_group_layout)}>
            <h4 className={css(styles.highlights, styles.highlights_layout)}>{count}</h4>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)",
  },
  flex_layout: {
    position: "relative",
    overflow: "hidden",
    flexGrow: 1,
    margin: 0,
  },
  group: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "10px 10px 10px 10px",
  },
  group_layout: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 230px",
    minHeight: 230,
    margin: 0,
  },
  flex1: {
    display: "flex",
  },
  flex1_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 20,
  },
  flex1_col: {
    display: "flex",
    flex: "0 1 183px",
  },
  flex2: {
    display: "flex",
    flexDirection: "column",
  },
  flex2_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "0px 0px 22px",
  },
  activities: {
    font: '500 35px/1.2 "Lato", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  activities_layout: {
    position: "relative",
    margin: 0,
  },
  flex3: {
    display: "flex",
    justifyContent: "space-between",
  },
  flex3_layout: {
    position: "relative",
    overflow: "visible",
    margin: "27px 0px 0px",
  },
  creation: {
    display: "flex",
    alignItems: "center",
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(59,66,112)",
    letterSpacing: "0px",
  },
  creation_layout: {
    position: "relative",
    margin: "2px 0px",
  },
  flex3_col: {
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
  flex4: {
    display: "flex",
    justifyContent: "space-between",
  },
  flex4_layout: {
    position: "relative",
    overflow: "visible",
    margin: "12px 0px 0px",
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
  flex4_col: {
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
  flex5: {
    display: "flex",
    justifyContent: "space-between",
  },
  flex5_layout: {
    position: "relative",
    overflow: "visible",
    margin: "12px 0px 0px",
  },
  deletion: {
    display: "flex",
    alignItems: "center",
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(59,66,112)",
    letterSpacing: "0px",
  },
  deletion_layout: {
    position: "relative",
    margin: "2px 0px",
  },
  flex5_col: {
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
  flex1_spacer: {
    display: "flex",
    flex: "0 1 50px",
  },
  flex1_col1: {
    display: "flex",
    flex: "0 1 116px",
  },
  group1: {
    display: "flex",
    background: "var(--src) center center / contain no-repeat",
  },
  group1_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 113.39,
    flexGrow: 1,
    margin: "61px 2.82px 15.61px 0px",
  },
  group2: {
    display: "flex",
  },
  group2_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 113.39,
    flexGrow: 1,
    margin: 0,
  },
});
