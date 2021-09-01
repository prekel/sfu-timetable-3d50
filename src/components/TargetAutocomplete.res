@react.component @genType
let make = (~onSubmit) => {
  let (display, setDisplay) = React.useState(() => false)
  let (search, setSearch) = React.useState(() => "")
  let (options, setOptions) = React.useState(() => [])

  let updateOptions = pattern => {
    let _: Js.Promise.t<unit> =
      Autocomplete.fetch(pattern)->Promise.thenResolve(options => setOptions(_ => options))
  }

  let updateOptionsDebounced = ReactDebounce.useDebounced(~wait=375, updateOptions)

  React.useEffect1(() => {
    let () = updateOptionsDebounced(search)
    Js.Console.log(options)
    None
  }, [search])

  <>
    <form
      className="form-inline"
      onSubmit={event => {
        ReactEvent.Synthetic.preventDefault(event)
        onSubmit(search)
      }}>
      <div className="no-gutters row">
        <div className="col">
          <div className="form-group">
            <input
              placeholder=`Группа/преподаватель`
              className="mr-sm-2 form-control"
              onChange={event => {
                let a = ReactEvent.Form.target(event)["value"]
                setSearch(_ => a)
                setDisplay(_ => true)
              }}
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
    {if display {
      <div>
        {options->Belt.Array.map(option => <span> {React.string(option)} </span>)->React.array}
      </div>
    } else {
      <> </>
    }}
  </>
}
