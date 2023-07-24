/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Request, type Response } from 'express'
import { Companies } from '../controllers/companies'
import { authorizeRequest } from '../middleware/authorize-requests'
import { handleValidationErrors } from '../middleware/validation-error-handler'
import { validateCompanyFields } from '../middleware/validation'
export const companyRouter = express.Router()

companyRouter.use(authorizeRequest)
companyRouter.post('/company', validateCompanyFields, handleValidationErrors, async (req: Request, res: Response) =>
  res.send(await new Companies().createCompany(req.body))
)

companyRouter.delete('/company/:id', async (req, res) => {
  try {
    const { id } = req.params
    await new Companies().deleteCompany(parseInt(id))
    res.send({ deletedCompanyId: id })
  } catch (err) {
    res.status(500).send({ error: 'Failed deleting company' })
  }
})

companyRouter.get('/company', async (req, res) =>
  res.send(await new Companies().getAllCompanies())
)

companyRouter.get('/company/:id', async (req, res) => {
  const { id } = req.params
  return res.send(await new Companies().getCompanyById(parseInt(id)))
})
/* eslint-enable @typescript-eslint/no-misused-promises */
