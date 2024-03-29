function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      next();
    }

    try {
      const userPayload = ValiditeToken(tokenCookieValue);
    } catch (error) {}
    next();
  };
}