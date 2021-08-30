@react.compenent @genType
let make = (~onSubmit) => {
  <>
    <form
      className="form-inline"
      onSubmit={event => {
        ReactEvent.Synthetic.preventDefault(event)
        onSubmit("qwe")
      }}>
      <div className="no-gutters row">
        <div className="col">
          <div className="form-group">
            <input
              placeholder=`Группа/преподаватель` className="mr-sm-2 form-control"
            />
          </div>
        </div>
        <div className="col">
          <button type_="submit" className="btn btn-primary">
            {React.string(`Открыть`)}
          </button>
        </div>
      </div>
    </form>
  </>
}
