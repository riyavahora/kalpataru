<?php

namespace App\Http\Services;

use App\Models\Users;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Mail;

/**
 * Class UserService
 * @package App\Http\Services
 */
class UserService
{
    /**
     * UserService constructor.
     */
    public function __construct()
    {
    }

    /**
     * @param array $params
     */
    public function storeUser(array $params)
    {
        $user = new Users($params);

        $user->password = Hash::make($params['password']);
        // $user->save();
        if ($user->save()) {
            $this->sendConfirmationToUser($user->getKey(), $user->email, $user->first_name);
            $this->sendMailToAdminForApproval($user->getKey(), $user->email, $user->first_name);
            return true;
        }

        return false;
    }

    public function sendConfirmationToUser($inserted_id, $email, $name)
    {
        //TODO:
        $data = [
            'name' => $name
        ];
        Mail::send('mail', $data, function ($message) {
            $message->to('riyadoshi9494@gmail.com', 'Tutorials Point')->subject('Laravel HTML Testing Mail');
            $message->from('sales@kalpatarugroup.net', 'Virat Gandhi');
        });
        dd('out');
        // include the phpmailer class file
        //     require_once "phpmailer/class.phpmailer.php";

        //     $message = '<html><head>
        //            <title>Email Verification</title>
        //            </head>
        //            <body>';
        //     $message .= 'Hi ' . $name . ',';
        //     $message .= '<br/><br/><p>Thank you for registering with us.</p>';
        //     $message .= '<br/><p>This email confirms that you are registered with member ID <a href="mailto:' . $email . '"> ' . $email . ' </a> and that you can now login to our website</p>';

        //     $message .= '<br/>Please click the link below to verify your email address:';
        //     $message .= '<br/><a href="kalpatarugroup.net/activate.php?id=' . base64_encode($inserted_id) . '">http://kalpatarugroup.net/activate.php?id=' . base64_encode($inserted_id) . '"';
        //     $message .= "</body></html>";

        // // php mailer code starts
        //     $mail = new PHPMailer(true);
        // // telling the class to use SMTP
        //     $mail->IsSMTP();
        // //$mail->SMTPDebug = 2;
        // // enable SMTP authentication
        //     $mail->SMTPAuth = true;
        // // sets the prefix to the server
        //     $mail->SMTPSecure = "tls";
        // // sets GMAIL as the SMTP server
        //  //   $mail->Host = "smtp.gmail.com";//
        //      $mail->Host = "smtp.hostinger.in";
        // // set the SMTP port for the GMAIL server
        //     $mail->Port = 587;
        // // set your username here
        //      $mail->Username = 'sales@kalpatarugroup.net';
        //     $mail->Password = 'Kalpataru9';
        // //$mail->SMTPDebug = 4;
        // // set your subject
        //     $mail->Subject = trim("Email Verifcation - www.kalpatarugroup.net");

        // // sending mail from
        //     $mail->SetFrom('sales@kalpatarugroup.net', 'Kalpataru');
        // // sending to
        //     $mail->AddAddress($email);
        // // set the message
        //     $mail->MsgHTML($message);

        //     try {
        //         $mail->send();
        //     } catch (Exception $ex) {
        //         echo $msg = $ex->getMessage();
        //     }
    }

    public function sendMailToAdminForApproval()
    {
        //TODO:
    }
}
