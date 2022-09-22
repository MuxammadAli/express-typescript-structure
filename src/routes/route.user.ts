import { Router } from 'express'

import { ControllerUsers } from '@controllers/controller.users'
import { validator } from '@middlewares/middleware.validator'
import { DTORegister, DTOLogin, DTOUsers } from '@dto/dto.users'

class RouteUsers extends ControllerUsers {
  private router: Router

  constructor() {
    super()
    this.router = Router() as Router
  }

  main(): Router {
    this.router.post('/register', [validator(DTORegister)], this.registerUsersController)
    this.router.post('/login', [validator(DTOLogin)], this.loginUsersController)
    this.router.get('/users', [validator(DTOUsers)], this.allUsersController)

    return this.router
  }
}

export default new RouteUsers().main()
