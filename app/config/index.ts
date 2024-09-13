class Route {
  public readonly list = {
    tasks: '/tasks',
    history: '/history',
  } as const

  public getRoute(route: keyof typeof this.list) {
    return this.list[route].replace(/^\//, '')
  }
}

export const ROUTES = new Route()
