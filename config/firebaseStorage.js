import { getStorage } from "firebase-admin/storage";
import { initializeApp, cert } from "firebase-admin/app";
import dotenv from "dotenv";

dotenv.config();

initializeApp({
  credential: cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDASNoYil7UA0ZW\no4SynybxtwxIIeXlfDxQRS4xuagE+I01dRjsn6Ghyxv0IhHWfv93kenJS6D1+mMZ\nEUoGXKiNzbUwcXmeKjfRA+CouJ3TRaEc4K2Osf9UXZsi5WL+srB09qv3dfd2A72P\nmLXVICUTVcagPt7ZBGabAxE5f082q8OxJSkyxC3CsRaA0rSV3LD4sH5czidXm6AI\nKQxvaYWs8uDT1YS5KjKxBRWu8Knp+YTKG4U++O47WicdXVQOg5yiPXFpQsjJES5q\nIdw9vBMPodKCkSh77bxukoFQLiIdgw5lZw+/1XMAkkRIeTF6P6rFb6SpRaOI9BAk\nWWB7LANZAgMBAAECggEABnXUJQeuGrGu+O12wYEVIAEiR6Ci7phDVv+SBx/pmBwp\nM2L3JskQt0TBkEzePE6JQwFLIWUZ9/W1A2Q4MFlH3PbMt/9SAplAxZQbpdOJEu53\nlKasUhtjHJimBBDAqBXFFbLtcWucWDHVOjg7YLkbIciLmznthw1NrLbYSu4e8VNa\nWvWPwV4x58MnMxuZiDYc41PhRbT0Na1iHcLaaIY2hcVOjr4FHY/kbtLYCpCdbOrV\nF1N95d5NhElRHz9e5HePiytImBUGhg0G+goS/ZeucOZ7caBIqRnL57Qa2Kzchyjs\nz8DSZtVr7ZJInK6fw+qV/lR9tqp+B+XHUD2djNLUIQKBgQDpYo3AZDBfgTSx+GkY\nIc4sGrzy1bnmAGsR+4Uj1BSJ7ONeGTd81PbHx5BV80tOz5iLmSwOPtot74W845eS\nUuzcraBLINyzT11WTqlwGrfMD0gqrH/WuecckbUV/icccH2cXcFT0+0UdODEGkS/\nE+nd4pt8SKF/GPdtIe5+cGnJOQKBgQDS6r6Qy60xN2he3RsDu5YOsOWRL3n/FWb2\nLTKpaqz5xo/qbmWZ1mS+UjjJZL/Dec1RArXquqDzpUzVAdXmuUiW+YCmDwIgr6D6\nHxkGHBuoO41lnGctLVQZfXCL09AI07pxjwHmOUXyRm7nRHxVYxUfxyUhg6Cd8lsq\nE9nWlSCrIQKBgQC5xsGfjCEVZPxVTrAZjY9YfFA73PWFqH+SaOyqgH946yByHxCU\nRdHLZYf3YxtnOMjtFpiDHnT+a9PBcEmPKINzhqI6K4aDFYHu2d72Zc44mVGQ5o88\nle7qRvIm95CaitDyT488802dIwxoDaD7mRZokaHDZO1pBq6uKHx4GXObwQKBgD+p\nNO21XEgfpjQD3rSIuSkkAZaJ0vPIPPSO/dye4yjc4vFqcuY1DOFZJeS7sRnKOMt7\n2vbHb+86dG9Sh4KFaECRfGAi5YyCFj+IhWAPudVUbEBALfA330t2TjMWMpOHfJ3s\nATHBFbijw7OwOyr2phiaXj24YhFqZlPT/AtFpb+hAoGASR9tLYTkTrDwJCZCAF3h\nUmeo543rhcBpkWL0J7CyDnrLtZYz3jeQ5H2U1mRMoFPkWDMgyyMLUnEB1k+z2jqm\nOktB2Po2yh8AMw4qsklZw61nVQECt+dFtGccMkbSJPaAObuDy86GrGIWtfeyAHBL\n9yud0s8NwnuqBvffMBoGwmE=\n-----END PRIVATE KEY-----\n`,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  }),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const storage = getStorage().bucket();

export default storage;
