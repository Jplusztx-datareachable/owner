import mainDomain from './mainDomain';

/**
 * @file redirect domain
 * @date 2021-1-16
 * @author Jack
 * @lastModify  2021-1-16
 */
let redirectToCompanyWebsite = ''; // redirect to company website
let redirectToLoginPage = ''; // redirect to login page
let redirectToDashboardPage = ''; //redirect to dashbord page
let redirectToSignupPage = ''; //redirect to sign up page
let redirectToSurveyPMpage = ''; //redirect to project PM page
let redirectToProfilePage = ''; //redirect to profile page
let redirectToQeditorPage = ''; // redirect to the qeditor page
let redirectToQuestionnaireddistribution = ''; // redirect to the questionnaire editor page
let redirectToAnalysisReport = ''; // redirect to the analysis and report page
let redirectToLogoutPage = ''; // redirect to the logout page
if (process.env.NODE_ENV == 'production') {
    redirectToCompanyWebsite =
        'http://landingpage-frontend-service.landing-page.svc.cluster.local/ ';
    redirectToLoginPage = 'http://landingpage-frontend-service.landing-page.svc.cluster.local/';
    redirectToDashboardPage = 'http://dashboard-frontend-service.dashboard.svc.cluster.local/';
    redirectToSignupPage = 'http://signup-frontend-service.user-system.svc.cluster.local/​​​​​​​';
    redirectToSurveyPMpage = 'http://survey-pm-frontend-service.survey.svc.cluster.local/';
    redirectToProfilePage = 'http://profile-frontend-service.user-system.svc.cluster.local/';
    redirectToQeditorPage = 'http://qeditor-frontend-service.qeditor.svc.cluster.local/';
    redirectToQuestionnaireddistribution =
        'http://survey-dist-frontend-service.survey.svc.cluster.local/';
    redirectToAnalysisReport =
        'http://survey-analysis-report-frontend-service.survey.svc.cluster.local/';
    redirectToLogoutPage = `${mainDomain}api/v1/session/logout`;
} else {
    redirectToCompanyWebsite =
        'http://landingpage-frontend-service.landing-page.svc.cluster.local/ ';
    redirectToLoginPage = 'http://landingpage-frontend-service.landing-page.svc.cluster.local/';
    redirectToDashboardPage = 'http://dashboard-frontend-service.dashboard.svc.cluster.local/';
    redirectToSignupPage = 'http://signup-frontend-service.user-system.svc.cluster.local/​​​​​​​';
    redirectToSurveyPMpage = 'http://survey-pm-frontend-service.survey.svc.cluster.local/';
    redirectToProfilePage = 'http://profile-frontend-service.user-system.svc.cluster.local/';
    redirectToQeditorPage = 'http://qeditor-frontend-service.qeditor.svc.cluster.local/';
    redirectToQuestionnaireddistribution =
        'http://survey-dist-frontend-service.survey.svc.cluster.local/';
    redirectToAnalysisReport =
        'http://survey-analysis-report-frontend-service.survey.svc.cluster.local/';
    redirectToLogoutPage = `${mainDomain}api/v1/session/logout`;
}

export {
    redirectToCompanyWebsite,
    redirectToLoginPage,
    redirectToDashboardPage,
    redirectToSignupPage,
    redirectToSurveyPMpage,
    redirectToProfilePage,
    redirectToQeditorPage,
    redirectToQuestionnaireddistribution,
    redirectToAnalysisReport,
    redirectToLogoutPage,
};
