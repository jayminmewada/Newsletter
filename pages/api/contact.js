require('dotenv').config()
import { connectToDatabase } from "../../lib/mongodb";


export default async function (req, res) {
    const cron = require("node-cron");
    const express = require("express");
    const password = process.env.password
    let nodemailer = require('nodemailer')
    const { db } = await connectToDatabase();

    var emailID = await db
        .collection("post")
        .find({})
        .project({ email: 1 })
        .limit(20)
        .toArray();

    var article = await db 
        .collection("article")
        .find({})
        .limit(6)
        .toArray();    

    console.log(article[0].link)
    
    

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'ronakdubey7@gmail.com',
            pass: password,
        },
        secure: true,
    })
    var propertyemail = []
    for (const property of emailID) {

        propertyemail.push(property.email);

    }
     
    var mailData = {

        from: 'Newsletter.CO',
        to: propertyemail,
        subject: `Message From ${req.body.name}`,
        text: "",
        html: "",
    };

    for(var i = 0;i<article.length;i++){

      mailData.html += `<div><!DOCTYPE html>

      <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
      
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <style>
              * {
                  box-sizing: border-box;
              }
      
              body {
                  margin: 0;
                  padding: 0;
              }
      
              a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important;
              }
      
              #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
              }
      
              p {
                  line-height: inherit
              }
      
              .desktop_hide,
              .desktop_hide table {
                  mso-hide: all;
                  display: none;
                  max-height: 0px;
                  overflow: hidden;
              }
      
              .menu_block.desktop_hide .menu-links span {
                  mso-hide: all;
              }
      
              @media (max-width:700px) {
                  .desktop_hide table.icons-inner {
                      display: inline-block !important;
                  }
      
                  .icons-inner {
                      text-align: center;
                  }
      
                  .icons-inner td {
                      margin: 0 auto;
                  }
      
                  .fullMobileWidth,
                  .row-content {
                      width: 100% !important;
                  }
      
                  .menu-checkbox[type=checkbox]~.menu-links {
                      display: none !important;
                      padding: 5px 0;
                  }
      
                  .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
                      display: none !important;
                  }
      
                  .menu-checkbox[type=checkbox]:checked~.menu-links,
                  .menu-checkbox[type=checkbox]~.menu-trigger {
                      display: block !important;
                      max-width: none !important;
                      max-height: none !important;
                      font-size: inherit !important;
                  }
      
                  .menu-checkbox[type=checkbox]~.menu-links>a,
                  .menu-checkbox[type=checkbox]~.menu-links>span.label {
                      display: block !important;
                      text-align: center;
                  }
      
                  .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
                      display: block !important;
                  }
      
                  .mobile_hide {
                      display: none;
                  }
      
                  .stack .column {
                      width: 100%;
                      display: block;
                  }
      
                  .mobile_hide {
                      min-height: 0;
                      max-height: 0;
                      max-width: 0;
                      overflow: hidden;
                      font-size: 0px;
                  }
      
                  .desktop_hide,
                  .desktop_hide table {
                      display: table !important;
                      max-height: none !important;
                  }
              }
      
              #menu111:checked~.menu-links {
                  background-color: #1e2f40 !important;
              }
      
              #menu111:checked~.menu-links a,
              #menu111:checked~.menu-links span {
                  color: #ffffff !important;
              }
          </style>
      </head>
      <body style="background-color: #133c55; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #133c55;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #b4ebfc;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
      <tbody>
      <tr>
      <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;"> </div>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #b4ebfc;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
      <tbody>
      <tr>
      <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="41.666666666666664%">
      <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; text-align: left; padding-top: 5px; padding-bottom: 5px;">
      <table align="left" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
      
      </table>
      </td>
      </tr>
      </table>
      </td>
      <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="58.333333333333336%">
      <table border="0" cellpadding="0" cellspacing="0" class="menu_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td class="pad" style="color:#1e2f40;font-family:inherit;font-size:16px;padding-right:15px;text-align:right;padding-top:5px;padding-bottom:5px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td class="alignment" style="text-align:right;font-size:0px;">
      <input class="menu-checkbox" id="menu111" style="display:none !important;max-height:0;visibility:hidden;" type="checkbox"/>
      
      <div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="menu111" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: right; text-align: center; color: #ffffff; text-decoration: none; background-color: #1e2f40; border-radius: 0;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:36px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;"></span></label></div>
      
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #b4ebfc;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
      <tbody>
      <tr>
      <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:65px;text-align:center;width:100%;">
      <h1 style="margin: 0; color: #272727; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 48px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>`+ article[i].title+`</strong></h1>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tr>
      <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
      <div style="font-family: sans-serif">
      <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 24px; color: #5f5f5f; line-height: 2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
      <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 32px;"><span style="font-size:16px;">`+ article[i].summary+`</span></p>
      </div>
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="10" cellspacing="0" class="button_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tr>
      <td class="pad">
      <div align="center" class="alignment">
      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:149px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#133C55" fillcolor="#133c55"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href=`+ article[i].link+` style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#133c55;border-radius:4px;width:auto;border-top:1px solid #133C55;font-weight:undefined;border-right:1px solid #133C55;border-bottom:1px solid #133C55;border-left:1px solid #133C55;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">LEARN MORE</span></span></a>
      <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
      </div>
      </td>
      </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="image_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
    
          </body>
      </html></p>`
    }
    
    console.log('Mail(Newsletter) Will send to all at 10am on every Monday')
    cron.schedule("34 13 * * 5", function () {
        
        transporter.sendMail(mailData, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log(info)
        })
    });
    res.status(200)

};
