const express = require("express");

const ctrl = require("../../controllers/auth");

const router = express.Router();

const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");

//  signup

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verify);

router.post(
  "/verify",
  validateBody(schemas.verifyEmailSchema),
  ctrl.resendEmail
);
// sign in
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
