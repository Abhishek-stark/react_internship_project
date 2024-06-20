import useSignup from "./../hooks/useSignup";

function Register() {
  const { onSubmit, onChange, formData } = useSignup();

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="heading">Register Form</div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              className="form-control"
              name="age"
              value={formData.age === 0 ? " " : formData.age}
              min={0}
              max={100}
              placeholder="Enter age"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group labelgroup">
            <label>Are you attending with a guest?</label>
            <input
              type="checkbox"
              id="checkboxid"
              className="form-control"
              name="checked"
              checked={formData.checked}
              onChange={onChange}
            />
          </div>
          {formData.checked && (
            <div className="form-group check-group">
              <input
                type="text"
                className="form-control"
                name="guestname"
                value={formData.guestname}
                placeholder="Enter guest name"
                onChange={onChange}
                required={formData.checked}
              />
            </div>
          )}
          <div className="form-group">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
