class Route {
  public readonly list = {
    tasks: '/tasks',
    history: '/history',
  } as const

  public readonly query = {
    addTask: '?add-task',
    editTask: '?edit-task',
  }

  public getRoute(route: keyof typeof this.list) {
    return this.list[route].replace(/^\//, '')
  }

  public getQueryKey(query: keyof typeof this.query) {
    return this.query[query].replace(/^\?/, '')
  }
}

export const ROUTES = new Route()
