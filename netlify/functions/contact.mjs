import nodemailer from 'nodemailer';
import moment from 'moment-timezone';

export default async (req, context) => {
  return new Response("hello " + req.fullName, { status: 200, statusText: 'eee' });
};