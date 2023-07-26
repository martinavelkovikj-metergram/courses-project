import { body, type ValidationChain } from 'express-validator';

export const validateParticipantFields: ValidationChain[] = [
  body('participant.name')
    .isString()
    .withMessage('Name must be a string'),
  body('participant.phone_number')
    .isString()
    .withMessage('Phone number must be a string'),
  body('participant.email')
    .isEmail()
    .withMessage('Invalid email format for a participant'),
  body('companyId').isNumeric().withMessage('CompanyId must be a number')
];

export const validateCompanyFields: ValidationChain[] = [
  body('name').isString().withMessage('Name must be a string'),
  body('phone_number').isString().withMessage('Phone number must be a string'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('participants')
    .isArray()
    .withMessage('Participants must be an array')
    .bail(),
  body('participants.*.name')
    .isString()
    .withMessage('Participant name must be a string'),
  body('participants.*.phone_number')
    .isString()
    .withMessage('Participant phone number must be a string'),
  body('participants.*.email')
    .isEmail()
    .withMessage('Invalid email format for a participant')
];

export const validateApplicationFields: ValidationChain[] = [
  body('participants')
    .isArray()
    .withMessage('Participants must be an array')
    .bail(),
  body('participants.*.participant_id')
    .isInt({ min: 1 })
    .withMessage('Participant ID must be a positive integer'),
  body('company.company_id')
    .isInt({ min: 1 })
    .withMessage('Company ID must be a positive integer'),
  body('course.course_id')
    .isInt({ min: 1 })
    .withMessage('Course ID must be a positive integer')
];
