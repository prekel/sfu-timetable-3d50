module Promise = {
    include Promise

    @genType
    let then_ = Promise.then
    
    @genType
    let thenResolve = Promise.thenResolve
}
