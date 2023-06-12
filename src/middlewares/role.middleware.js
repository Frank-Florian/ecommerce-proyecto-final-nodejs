const isAdmin = (req, res, next) => {
  const { username, rolId } = req.user;
  // 1 -> member
  // 2 -> modedator
  // 3 -> admin
  // el usuario no es un admin
  if (rolId !== 3) {
    return next({
      status: 401,
      name: "No admin",
      message: `Sorry ${username} Solo los administradores tienen acceso a esta área.`,
    });
  }
  next();
};

const hasRoles = (...roles) => {
  // devolver una función de middleware
  return (req, res, next) => {
    const { rolId } = req.user;
    if (!roles.includes(rolId)) {
      next({
        status: 401,
        name: "Role required",
        message: `El usuario no tiene el rol requerido para acceder a esta función`,
      });
    }
    next();
  };
};

module.exports = {
  isAdmin,
  hasRoles,
};
