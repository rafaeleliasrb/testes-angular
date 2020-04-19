import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValitions {
    static requiredMinCheckbox(min = 1) {
        const validator = (formArray: FormArray) => {
            const totalChecked = formArray.controls
                .map((control: FormControl) => control.value)
                .reduce((total, current) => current ? total + current : total, 0);

            return totalChecked >= min ? null : { required: true };
        };

        return validator;
    }

    static cepValidator(control: FormControl) {
        const cep = control.value;
        if (cep && cep !== '') {
            const validacep = /^[0-9]{8}$/;

            return validacep.test(cep) ? null : { cepInvalido: true };
        }
    }

    static equalsTo(outroCampo: string) {
        const validator = (campoAtualControl: FormControl) => {
            if (outroCampo == null) {
                throw new Error('É necessário informar o outro campo');
            }

            if (!campoAtualControl.root || !(campoAtualControl.root as FormGroup).controls) {
                return null;
            }

            const outroCampoControl = (campoAtualControl.root as FormGroup).get(outroCampo);
            if (!outroCampoControl) {
                throw new Error('É necessário informar um campo válido');
            }

            if (campoAtualControl.value !== outroCampoControl.value) {
                return { equalsTo: outroCampoControl };
            }

            return null;
        };

        return validator;
    }

    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
        const config = {
            required: `${fieldName} é obrigatório.`,
            minlength: `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength}.`,
            cepInvalido: 'Cep inválido'
        };

        return config[validatorName];
    }
}
