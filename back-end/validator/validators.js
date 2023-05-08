//Import Validator
import validator from "validator";

/**
 * Export USER Validator
 */
export function userValidator(data) {
    let { usuario, contrasenia, correo } = data;

    //Clean data
    usuario = validator.trim(usuario);
    contrasenia = validator.trim(contrasenia);
    correo = validator.normalizeEmail(correo);
    correo = validator.trim(correo);

    Object.assign(data, { usuario, contrasenia, correo });
    const errors = {};

    //MAKE VALIDATIONS

    //Verify user name
    if(validator.isEmpty(usuario)) {
        errors.usuario = "El campo de usuario es requerido!!";
    }
    if(!validator.isAlphanumeric(usuario)) {
        errors.usuario = "El nombre de usuario debe contener solo letras o números.";
    }
    if(!validator.isLength(usuario, { min: 5, max: 25 })) {
        errors.usuario = "El nombre de usuario debe contener entre 5 y 25 caractéres.";
    }

    //Verify user password
    if(validator.isEmpty(contrasenia)) {
        errors.contrasenia = "El campo de contraseña es requerido!!";
    }
    if(!validator.isStrongPassword(contrasenia)) {
        errors.contrasenia = "La contraseña debe contener al menos 8 caracteres, minúscula, mayúscula, números y símbolos."
    }

    //verify if email is valid chain
    if(validator.isEmpty(correo)) {
        errors.correo = "El correo es requerido!!";
    }
    if(!validator.isEmail(correo, { allow_utf8_local_part: false })) {
        errors.correo = "Email inválido";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

/**
 * Export PATIENT Validator
 */
export function patientValidator(data) {
    let {nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, codigoPaciente} = data;

    //Clean Data
    nombres = validator.trim(nombres);
    primerApellido = validator.trim(primerApellido);
    segundoApellido = validator.trim(segundoApellido);
    numeroCi = validator.trim(numeroCi);
    extensionCi = validator.trim(extensionCi);
    direccion = validator.trim(direccion);
    codigoPaciente = validator.trim(codigoPaciente);

    Object.assign(data, { nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, codigoPaciente });
    const errors = {};

    //MAKE VALIDATIONS

    //Verify names
    if(validator.isEmpty(nombres)) {
        errors.nombres = "El nombre es requerido!!";
    }
    if(!validator.isAlpha(nombres)) {
        errors.nombres = "Solo puede ingresar letras en el nombre!!";
    }
    if(!validator.isLength(nombres, { min: 5, max: 60})) {
        errors.nombres = "El nombre debe contener entre 5 y 60 caracteres!!";
    }

    //Verify first last name
    if(validator.isEmpty(primerApellido)) {
        errors.primerApellido = "El primer apellido es requerido!!";
    }
    if(!validator.isAlpha(primerApellido)) {
        errors.primerApellido = "Solo puede ingresar letras en el primer apellido!!";
    }
    if(!validator.isLength(primerApellido, { min: 5, max: 50})) {
        errors.primerApellido = "El primer apellido debe contener entre 5 y 50 caracteres!!";
    }

    //Verify second last name
    if(!validator.isLength(segundoApellido, { min: 0, max: 50})) {
        errors.segundoApellido = "El segundo apellido no puede tener mas de 50 caracteres!!";
    }

    //Verify ID number
    if(validator.isEmpty(numeroCi)) {
        errors.numeroCi = "El número de CI es requerido!!";
    }
    if(!validator.isLength(numeroCi, { min: 5, max: 30})) {
        errors.numeroCi = "El número de CI debe ser entre 10 y 30 caracteres!!";
    }

    //Verify ID extention
    if(validator.isEmpty(extensionCi)) {
        errors.extensionCi = "La extensión es requerida!!";
    }
    if(!validator.isAlphanumeric(extensionCi)) {
        errors.extensionCi = "La extensión debe ser alfanumérica!!";
    }
    if(!validator.isLength(extensionCi, { min: 2, max: 5 })) {
        errors.extensionCi = "La extensión debe tener entre 2 y 5 caracteres!!";
    }

    //Verify direction
    if(validator.isEmpty(direccion)) {
        errors.direccion = "La dirección es requerida!!";
    }
    if(!validator.isLength(direccion, { min: 5, max: 60})) {
        errors.direccion = "La dirección debe ser entre 10 y 60 caracteres!!";
    }

    //Verify patient code
    if(validator.isEmpty(codigoPaciente)) {
        errors.codigoPaciente = "El código de paciente es requerido!!";
    }
    if(!validator.isLength(codigoPaciente, { min: 3, max: 45})) {
        errors.codigoPaciente = "El código de paciente debe contener entre 3 y 45 caracteres!!";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

/**
 * Export HISTORY Validator
 */
export function historyValidator(data) {
    let { descripcion } = data;

    //Clean Data
    descripcion = validator.trim(descripcion);

    Object.assign(data, { descripcion });
    const errors = {};

    //MAKE VALIDATIONS

    //Verify description
    if(validator.isEmpty(descripcion)) {
        errors.descripcion = "La descripción es requerida!!";
    }
    if(!validator.isLength(descripcion, { min: 3, max: 200})) {
        errors.descripcion = "La descripción no debe contener mas de 200 caracteres!!";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

/**
 * Export BIOPSY Validator
 */
export function biopsyValidator(data) {
    let {
        nombreEstudio,
        descripcion,
        resultado,
        radiusMean,
        textureMean,
        smoothnessMean,
        compactnessMean,
        symmetryMean,
        fractalDimensionMean,
        radiusSE,
        textureSE,
        smoothnessSE,
        concavePointsSE,
        symmetrySE,
        symmetryWorst,
        fractalDimensionWorst
    } = data;

    //Clean Data
    nombreEstudio = validator.trim(nombreEstudio),
    descripcion = validator.trim(descripcion),
    resultado = validator.trim(resultado),
    radiusMean = validator.trim(radiusMean),
    textureMean = validator.trim(textureMean),
    smoothnessMean = validator.trim(smoothnessMean),
    compactnessMean = validator.trim(compactnessMean),
    symmetryMean = validator.trim(symmetryMean),
    fractalDimensionMean = validator.trim(fractalDimensionMean),
    radiusSE = validator.trim(radiusSE),
    textureSE = validator.trim(textureSE),
    smoothnessSE = validator.trim(smoothnessSE),
    concavePointsSE = validator.trim(concavePointsSE),
    symmetrySE = validator.trim(symmetrySE),
    symmetryWorst = validator.trim(symmetryWorst),
    fractalDimensionWorst = validator.trim(fractalDimensionWorst)

    Object.assign(data, { 
        radiusMean,
        textureMean,
        smoothnessMean,
        compactnessMean,
        symmetryMean,
        fractalDimensionMean,
        radiusSE,
        textureSE,
        smoothnessSE,
        concavePointsSE,
        symmetrySE,
        symmetryWorst,
        fractalDimensionWorst
     });
    const errors = {};

    //MAKE VALIDATIONS

    //Verify description
    if(validator.isEmpty(descripcion)) {
        errors.descripcion = "La descripción es requerida";
    }
    if(!validator.isLength(descripcion, { min: 10, max: 200 })) {
        errors.descripcion = "La descripción debe contener entre 10 y 200 caracteres!!"
    }

    //Verify biopsy data
    Object.keys(data).forEach((key) => {
        if(validator.isEmpty(data[key])){
            errors[key] = `${key} : El campo es requerido!!`;
        }
    });

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

/**
 * Export NUCLEI CELLS Validator
 */
export function nucleiCellsValidator(data) {
    Object.keys(data).forEach((key) => {
        data[key] = validator.trim(data[key]);
    });

    let { 
        nombreEstudio,
        descripcion,
        resultado,
        clumbThickness,
        shapeUniformity,
        marginalAdhesion,
        epithelialSize,
        bareNucleoli,
        blandChromatin,
        normalNucleoli,
        mitosis
     } = data;

    Object.assign(data, { 
        nombreEstudio,
        descripcion,
        resultado,
        clumbThickness,
        shapeUniformity,
        marginalAdhesion,
        epithelialSize,
        bareNucleoli,
        blandChromatin,
        normalNucleoli,
        mitosis
     });
    const errors = {};

    //MAKE VALIDATIONS

    //Verify description
    if(validator.isEmpty(descripcion)) {
        errors.descripcion = "La descripción es requerida";
    }
    if(!validator.isLength(descripcion, { min: 10, max: 200 })) {
        errors.descripcion = "La descripción debe contener entre 10 y 200 caracteres!!"
    }

    //Verify biopsy data
    Object.keys(data).forEach((key) => {
        if(validator.isEmpty(data[key])){
            errors[key] = `${key} : El campo es requerido!!`;
        }
    });

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

/**
 * Export MIRAI Validator
 */
export function miraiValidator(data) {
    let { rutaMamografia } = data;

    //Clean data
    rutaMamografia = validator.trim(rutaMamografia);

    Object.assign(data, { rutaMamografia });
    const errors = {};

    //MAKE VALIDATIONS

    //Verify user name
    if(validator.isEmpty(rutaMamografia)) {
        errors.rutaMamografia = "El campo de ruta de mamografía es requerido!!";
    }
    if(!validator.isLength(rutaMamografia, { min: 5, max: 150 })) {
        errors.rutaMamografia = "La ruta de la mamografía debe contener entre 5 y 150 caractéres.";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

/**
 * Export ULTRASOUND Validator
 */
export function ultrasoundValidator(data) {
    let { rutaUltrasonido } = data;

    //Clean data
    rutaUltrasonido = validator.trim(rutaUltrasonido);

    Object.assign(data, { rutaUltrasonido });
    const errors = {};

    //MAKE VALIDATIONS

    //Verify user name
    if(validator.isEmpty(rutaUltrasonido)) {
        errors.rutaUltrasonido = "El campo de ruta de ultrasonido es requerido!!";
    }
    if(!validator.isLength(rutaUltrasonido, { min: 5, max: 150 })) {
        errors.rutaUltrasonido = "La ruta de la ultrasonido debe contener entre 5 y 150 caractéres.";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}

/**
 * Export PERSON Validator
 */
export function personValidator(data) {
    let { 
        nombres,
        primerApellido,
        segundoApellido,
        numeroCi,
        extensionCi,
        direccion
     } = data;

    //Clean data
    nombres = validator.trim(nombres);
    primerApellido = validator.trim(primerApellido);
    segundoApellido = validator.trim(segundoApellido);
    numeroCi = validator.trim(numeroCi);
    extensionCi = validator.trim(extensionCi);
    direccion = validator.trim(direccion);

    Object.assign(data, { nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion });
    const errors = {};

    //MAKE VALIDATIONS

    //Verify person names
    if(validator.isEmpty(nombres)) {
        errors.nombres = "El campo de nombres es requerido!!";
        console.log(errors.nombres);
    }
    if(!validator.isLength(nombres, { min: 5, max: 60 })) {
        errors.nombres = "El nombre de persona debe contener entre 5 y 60 caractéres.";
        console.log(errors.nombres);
    }
    if(!validator.isAlpha(nombres)) {
        errors.nombres = "El nombre solo debe contener caractéres alfabéticos.";
        console.log(errors.nombres);
    }

    //Verify person first last name
    if(validator.isEmpty(primerApellido)) {
        errors.primerApellido = "El campo de primer apellido es requerido!!";
        console.log(errors.primerApellido);
    }
    if(!validator.isLength(primerApellido, { min: 5, max: 50 })) {
        errors.primerApellido = "El primer apellido debe contener entre 5 y 50 caractéres.";
        console.log(errors.primerApellido);
    }
    if(!validator.isAlpha(primerApellido)) {
        errors.primerApellido = "El primer apellido debe contener caractéres alfabéticos.";
        console.log(errors.primerApellido);
    }

    //Verify person CI number
    if(validator.isEmpty(numeroCi)) {
        errors.numeroCi = "El campo de CI es requerido!!";
        console.log(errors.numeroCi);
    }
    if(!validator.isLength(numeroCi, { min: 5, max: 30 })){
        errors.numeroCi = "El campo de CI debe contener entre 5 y 30 caractéres.";
        console.log(errors.numeroCi);
    }
    if(!validator.isAlphanumeric(numeroCi)) {
        errors.numeroCi = "El campo de CI debe contener solo números o letras.";
        console.log(errors.numeroCi);
    }

    //Verify person CI extension
    if(validator.isEmpty(extensionCi)) {
        errors.extensionCi = "El campo de extensión de CI es requerido!!";
        console.log(errors.extensionCi);
    }
    if(!validator.isLength(extensionCi, { min: 1, max: 10})) {
        errors.extensionCi = "La extensión de CI debe contener entre 1 y 10 caractéres!!";
        console.log(errors.extensionCi);
    }

    //Verify person address
    if(validator.isEmpty(direccion)) {
        errors.direccion = "El campo de dirección es requerido!!";
        console.log(errors.direccion);
    }
    if(!validator.isLength(direccion, { min: 5, max: 60 })) {
        errors.direccion = "La dirección debe contener entre 5 y 60 caractéres!!";
        console.log(errors.direccion);
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }
}