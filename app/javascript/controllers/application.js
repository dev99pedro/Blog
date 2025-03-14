import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
const application = Application.start()
console.log("Stimulus carregado!")

const context = require.context("controllers", true, /_controller\.js$/)
application.load(definitionsFromContext(context))