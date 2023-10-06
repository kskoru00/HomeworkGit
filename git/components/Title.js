import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.purple}>Kate</h2>
      <h2 className={classes.blue}>Andrea</h2>
      <h2 className={classes.orange}>Alex</h2>
    </div>
  );
};

export default Title;
