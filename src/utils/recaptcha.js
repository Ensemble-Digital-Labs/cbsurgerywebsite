export const RECAPTCHA_SITE_KEY = '6Lda8qopAAAAAJvtoxBAxiReQIgEt-mSTiXExXxR';

let readyPromise = null;

/** Call on page load so grecaptcha.ready is instant when the user submits. */
export function warmRecaptcha() {
    if (typeof grecaptcha === 'undefined') {
        return Promise.resolve();
    }

    if (!readyPromise) {
        readyPromise = new Promise((resolve) => {
            grecaptcha.ready(resolve);
        });
    }

    return readyPromise;
}

export function getRecaptchaToken(action = 'submit_form') {
    return warmRecaptcha().then(() =>
        grecaptcha.execute(RECAPTCHA_SITE_KEY, { action }),
    );
}
