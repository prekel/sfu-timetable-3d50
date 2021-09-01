@react.component @genType
let make = (~onSubmit) => {
  let (display, setDisplay) = React.useState(() => false)
  let (search, setSearch) = React.useState(() => "")
  let (options, setOptions) = React.useState(() => [])

  let updateOptions = pattern => {
    let _: Js.Promise.t<unit> =
      Autocomplete.fetch(pattern)->Promise.thenResolve(options => setOptions(_ => options))
  }

  let updateOptionsDebounced = ReactDebounce.useDebounced(~wait=275, updateOptions)

  React.useEffect1(() => {
    if display {
      let () = updateOptionsDebounced(search)
      Js.Console.log(options)
    }
    None
  }, [search])

  <form
    className="form-inline my-2 my-lg-0 pos-rel"
    onSubmit={event => {
      ReactEvent.Synthetic.preventDefault(event)
      onSubmit(search)
      setDisplay(_ => false)
      setSearch(_ => "")
    }}>
    <input
      placeholder=`Группа/преподаватель`
      className="form-control mr-sm-2 form-control"
      value={search}
      onChange={event => {
        let a = ReactEvent.Form.target(event)["value"]
        setSearch(_ => a)
        setDisplay(_ => true)
      }}
    />
    <button type_="submit" className="btn btn-primary"> {React.string(`Открыть`)} </button>
    {if display {
      <ul className="autoContainer list-group">
        {options
        ->Belt.Array.map(option =>
          <li className="list-group-item" onClick={_ => setSearch(_ => option)} key={option}>
            <span> {React.string(option)} </span>
          </li>
        )
        ->React.array}
      </ul>
    } else {
      <> </>
    }}
  </form>
}
