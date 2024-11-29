import {verifyToken} from "../../utils/verify-token.js"
import { getName } from "../../utils/get-name.js"
import { logout } from "../../utils/logout.js"

const url = "../login/login.html"

verifyToken(url)

const name = await getName()

const nameP = document.querySelector(".user p")
nameP.innerText = `Úsuario: ${name}`

logout()