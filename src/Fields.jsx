import React, { useEffect, useState } from "react";

const Fields = () => {
  const [fld, setfld] = useState({});
  //   const [checked, setchecked] = useState([false, false]);

  //   useEffect(() => {
  //     console.log(fld);
  //   }, []);

  const handleTxtFields = (e) => {
    e.preventDefault();
    setfld(e);
    console.log(fld);
  };

  //   const handleChange = () => {
  //     setchecked(!checked);
  //     console.log(checked);
  //   };

  return (
    <>
      <form onSubmit={() => handleTxtFields(e)}>
        <div className="input">
          <label>Which text fields do you want?</label>
          <div className="checkbox">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="checkbox"
              //   checked={checked}
              //   onChange={handleChange}
              value="LinkedIn"
              id="linkedin"
            />
          </div>

          <div className="checkbox">
            <label htmlFor="expect">
              What do you expect to learn from here?
            </label>
            <input
              type="checkbox"
              //   checked={checked}
              //   onChange={handleChange}
              value="What do you expect to learn from here?"
              id="expect"
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Fields;
