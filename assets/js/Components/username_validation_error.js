import '../../css/username_validation_error.css';

export default function($usernameInput) {
    const $warning = $('<div class="login-long-username-warning">This is a really long username - are you sure that is right?</div>');
    $usernameInput.before($warning);
}