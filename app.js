// Fix the `updateLocalidadesCliente` function
function updateLocalidadesCliente() {
    const provinciaClienteSelect = document.getElementById('provinciaCliente');
    const localidadClienteSelect = document.getElementById('localidadCliente');
    const provincia = provinciaClienteSelect.value;

    localidadClienteSelect.innerHTML = '<option value="">Seleccione una localidad</option>';
    if (provinciasLocalidades[provincia]) {
        provinciasLocalidades[provincia].forEach(localidad => {
            const option = document.createElement('option');
            option.value = localidad;
            option.textContent = localidad;
            localidadClienteSelect.appendChild(option);
        });
    }
} // Ensure this function is properly closed

// Fix the `updateLocalidades` function
function updateLocalidades() {
    const provinciaSelect = document.getElementById('provincia');
    const localidadSelect = document.getElementById('localidad');
    const provincia = provinciaSelect.value;

    localidadSelect.innerHTML = '<option value="">Seleccione una localidad</option>';
    if (provinciasLocalidades[provincia]) {
        provinciasLocalidades[provincia].forEach(localidad => {
            const option = document.createElement('option');
            option.value = localidad;
            option.textContent = localidad;
            localidadSelect.appendChild(option);
        });
    }
} // Ensure this function is properly closed

// Fix the `updateNavigationUI` function
function updateNavigationUI(isLoggedIn, role) {
    const perfilBtn = document.getElementById('perfilBtn');
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    const dashboardProBtn = document.getElementById('dashboardProBtn');
    const dashboardClientBtn = document.getElementById('dashboardClientBtn');
    const registroBtn = document.getElementById('registroBtn');
    const loginBtn = document.getElementById('loginBtn');
    const logoutButton = document.getElementById('logoutButton');

    if (isLoggedIn) {
        registroBtn.classList.add('hidden');
        loginBtn.classList.add('hidden');
        logoutButton.classList.remove('hidden');

        if (role === 'professional') {
            perfilBtn.classList.remove('hidden');
            dashboardProBtn.classList.remove('hidden');
            clientProfileBtn.classList.add('hidden');
            dashboardClientBtn.classList.add('hidden');
        } else if (role === 'client') {
            clientProfileBtn.classList.remove('hidden');
            dashboardClientBtn.classList.remove('hidden');
            perfilBtn.classList.add('hidden');
            dashboardProBtn.classList.add('hidden');
        }
    } else {
        registroBtn.classList.remove('hidden');
        loginBtn.classList.remove('hidden');
        logoutButton.classList.add('hidden');
        perfilBtn.classList.add('hidden');
        clientProfileBtn.classList.add('hidden');
        dashboardProBtn.classList.add('hidden');
        dashboardClientBtn.classList.add('hidden');
    }
} // Ensure this function is properly closed

// Ensure all functions are properly closed and remove unreachable code
// ...existing code...
let auth;
let db;

const firebaseConfig = {
    apiKey: "AIzaSyD0aMnj7FfOcs4pWbbqgGUQO0hWkFmtQpw",
    authDomain: "awesome-project-97893.firebaseapp.com",
    projectId: "awesome-project-97893",
    storageBucket: "awesome-project-97893.firebasestorage.app",
    messagingSenderId: "482872759387",
    appId: "1:482872759387:web:dbc978cb230b595b855b7e",
    measurementId: "G-2ZYWLN8353"
};

const provinciasLocalidades = {
    "Misiones": ["Posadas", "Oberá", "Eldorado", "Puerto Iguazú", "Garupá", "Apóstoles", "San Vicente", "Leandro N. Alem", "Jardín América", "Puerto Rico"],
    "Buenos Aires": ["La Plata", "Mar del Plata", "Bahía Blanca", "Quilmes", "Tandil", "San Isidro", "Vicente López", "Tigre", "Pilar", "Morón"],
    "CABA": ["Palermo", "Belgrano", "Recoleta", "San Telmo", "Caballito", "Núñez", "Villa Urquiza", "Almagro", "Flores", "Villa Crespo"],
    "Córdoba": ["Córdoba", "Villa Carlos Paz", "Río Cuarto", "Villa María", "Alta Gracia", "Jesús María", "Bell Ville", "San Francisco", "Río Tercero", "La Falda"],
    "Santa Fe": ["Santa Fe", "Rosario", "Rafaela", "Venado Tuerto", "Reconquista", "San Lorenzo", "Villa Constitución", "Esperanza", "Gálvez", "Santo Tomé"]
};

const localidadesPorProvincia = {
    "Buenos Aires": ["La Plata", "Mar del Plata", "Bahía Blanca"],
    "CABA": ["Palermo", "Recoleta", "Belgrano"],
    "Catamarca": ["San Fernando del Valle de Catamarca"],
    // Add other provinces and their localities here
    // ...existing code...
    
    async function checkUserType() {
        try {
            const user = auth.currentUser;
            if (!user) {
                throw new Error('Usuario no autenticado.');
            }
    
            const userDoc = await db.collection('users').doc(user.uid).get();
            if (!userDoc.exists) {
                throw new Error('El usuario no existe en la base de datos.');
            }
    
            const userData = userDoc.data();
            console.log('Tipo de usuario:', userData.type);
            return userData.type; // Return the user type (e.g., 'client' or 'professional')
        } catch (error) {
            console.error('Error checking user type:', error);
            throw error;
        }
    }
    
    // Example usage during login
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            try {
                const userType = await checkUserType();
                console.log('Usuario autenticado como:', userType);
                // Redirect or load the appropriate dashboard based on userType
            } catch (error) {
                alert('Error al verificar el tipo de usuario: ' + error.message);
            }
        } else {
            console.log('No hay usuario autenticado.');
        }
    });
};

function updateLocalidadesCliente() {
    const provinciaClienteSelect = document.getElementById('provinciaCliente');
    const localidadClienteSelect = document.getElementById('localidadCliente');
    const provincia = provinciaClienteSelect.value;

    localidadClienteSelect.innerHTML = '<option value="">Seleccione una localidad</option>';
    if (provinciasLocalidades[provincia]) {
        provinciasLocalidades[provincia].forEach(localidad => {
            const option = document.createElement('option');
            option.value = localidad;
            option.textContent = localidad;
            localidadClienteSelect.appendChild(option);
        });
        localidadClienteSelect.disabled = false;
} else {
        localidadClienteSelect.disabled = true;
    // (Remove this line as it is an extra closing brace)
}

function updateLocalidades() {
    const provinciaSelect = document.getElementById('provincia');
    const localidadSelect = document.getElementById('localidad');
    const provincia = provinciaSelect.value;

    localidadSelect.innerHTML = '<option value="">Seleccione una localidad</option>';
    if (provinciasLocalidades[provincia]) {
        provinciasLocalidades[provincia].forEach(localidad => {
            const option = document.createElement('option');
            option.value = localidad;
            option.textContent = localidad;
            localidadSelect.appendChild(option);
        });
        localidadSelect.disabled = false;
    } else {
        localidadSelect.disabled = true;
    }
}

function updateNavigationUI(isLoggedIn, role) {
    console.log('Updating UI:', { isLoggedIn, role });
    
    const elements = {
        registroBtn: document.getElementById('registroBtn'),
        loginBtn: document.getElementById('loginBtn'),
        perfilBtn: document.getElementById('perfilBtn'),
        clientProfileBtn: document.getElementById('clientProfileBtn'),
        notificationsBtn: document.getElementById('notificationsBtn'),
        searchBtn: document.getElementById('searchBtn'),
        dashboardProBtn: document.getElementById('dashboardProBtn'),
        dashboardClientBtn: document.getElementById('dashboardClientBtn'),
        logoutButton: document.getElementById('logoutButton'),
        floatingChatButton: document.getElementById('floatingChatButton'),
        notificationsPanel: document.getElementById('notificationsPanel')
    };

    if (isLoggedIn) {
        elements.registroBtn?.classList.add('hidden');
        elements.loginBtn?.classList.add('hidden');
        elements.logoutButton?.classList.remove('hidden');
        elements.floatingChatButton?.classList.remove('hidden');
        
        // Show role-specific elements
        if (role === 'Profesional') {
            elements.perfilBtn?.classList.remove('hidden');
            elements.dashboardProBtn?.classList.remove('hidden');
            elements.clientProfileBtn?.classList.add('hidden');
            elements.dashboardClientBtn?.classList.add('hidden');
        } else if (role === 'Cliente') {
            elements.perfilBtn?.classList.add('hidden');
            elements.dashboardProBtn?.classList.add('hidden');
            elements.clientProfileBtn?.classList.remove('hidden');
            elements.dashboardClientBtn?.classList.remove('hidden');
        }
        
        // Show notifications for both roles
        if (role === 'Cliente' || role === 'Profesional') {
            elements.notificationsBtn?.classList.remove('hidden');
        }
    } else {
        // Hide all authenticated elements
        Object.values(elements).forEach(element => element?.classList.add('hidden'));
        elements.registroBtn?.classList.remove('hidden');
        elements.loginBtn?.classList.remove('hidden');
    }
}

function initializeRoleNotifications(role) {
    const requestsSection = document.getElementById('requestsNotifications');
    const paymentsSection = document.getElementById('paymentsNotifications');
    const messagesSection = document.getElementById('messagesNotifications');

    // Configure notifications based on role
    if (role === 'Profesional') {
        requestsSection?.classList.remove('hidden');
        paymentsSection?.classList.remove('hidden');
        messagesSection?.classList.remove('hidden');
        listenForProfessionalNotifications();
    } else if (role === 'Cliente') {
        requestsSection?.classList.add('hidden');  // Clients don't receive service requests
        paymentsSection?.classList.remove('hidden');
        messagesSection?.classList.remove('hidden');
        listenForClientNotifications();
    }
}

function listenForProfessionalNotifications() {
    const user = auth.currentUser;
    if (!user) return; // Add return to handle missing user

    // Listen for service requests
    db.collection('requests')
        .where('professionalId', '==', user.uid)
        .where('status', '==', 'pending')
        .onSnapshot(snapshot => {
            updateNotificationBadge();
            refreshNotifications();
        });

    // Listen for payments and messages
    setupCommonNotificationListeners();
} // Add missing closing brace

function listenForClientNotifications() {
    const user = auth.currentUser;
    if (!user) return; // Add return to handle missing user

    // Listen for service status updates
    db.collection('requests')
        .where('clientId', '==', user.uid)
        .where('status', 'in', ['accepted', 'rejected', 'completed'])
        .onSnapshot(snapshot => {
            updateNotificationBadge();
            refreshNotifications();
        });

    // Listen for payments and messages
    setupCommonNotificationListeners();
} // Add missing closing brace
}

function setupCommonNotificationListeners() {
    const user = auth.currentUser;
    if (!user) return;

    // Listen for payment notifications
    db.collection('payments')
        .where('userId', '==', user.uid)
        .where('status', 'in', ['completed', 'failed'])
        .onSnapshot(snapshot => {
            // ...existing code...
        });

    // Listen for unread messages
    db.collection('messages')
        .where('recipientId', '==', user.uid)
        .where('read', '==', false)
        .onSnapshot(snapshot => {
            // ...existing code...
        });
} // Ensure this closing brace is present

function updateNotificationBadge() {
    const badgeElement = document.getElementById('notificationCount');
    if (!badgeElement) return;

    getUnreadNotificationsCount().then(count => {
        badgeElement.textContent = count;
        badgeElement.style.display = count > 0 ? 'flex' : 'none';
    });
}

async function loadClientPreferences() {
    if (!auth.currentUser) return;

    try {
        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            console.error('No user data found');
            return;
        }

        const emailPref = document.getElementById('emailPreference');
        const pushPref = document.getElementById('pushPreference');

        if (emailPref) emailPref.checked = userData.preferences?.email || false;
        if (pushPref) pushPref.checked = userData.preferences?.push || false;
    } catch (error) {
        console.error('Error loading client preferences:', error);
        showToast('Error al cargar las preferencias', 'error');
    }
}

async function loadClientPaymentMethods() {
    const container = document.getElementById('paymentMethodsList');
    if (!container || !auth.currentUser) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('paymentMethods')
            .get();

        container.innerHTML = '';

        if (snapshot.empty) {
            container.innerHTML = '<p>No hay métodos de pago guardados</p>';
            return;
        }

        snapshot.forEach(doc => {
            const paymentMethod = doc.data();
            container.appendChild(createPaymentMethodCard(paymentMethod, doc.id));
        });
    } catch (error) {
        console.error('Error loading payment methods:', error);
        showToast('Error al cargar los métodos de pago', 'error');
    }
}

function createPaymentMethodCard(paymentMethod, paymentMethodId) {
    const card = document.createElement('div');
    card.className = 'payment-method-card';
    card.innerHTML = `
        <div class="payment-method-info">
            <h4>${paymentMethod.alias || 'Método de Pago'}</h4>
            <p>${paymentMethod.cardNumber}</p>
            <p>${paymentMethod.expiryDate}</p>
        </div>
        <div class="payment-method-actions">
            <button onclick="editPaymentMethod('${paymentMethodId}')" class="btn-icon">✏️</button>
            <button onclick="deletePaymentMethod('${paymentMethodId}')" class="btn-icon">🗑️</button>
        </div>
    `;
    return card;
}

async function editPaymentMethod(paymentMethodId) {
    // Implement the logic to edit a payment method
}

async function deletePaymentMethod(paymentMethodId) {
    if (!confirm('¿Está seguro de eliminar este método de pago?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('paymentMethods')
            .doc(paymentMethodId)
            .delete();

        showToast('Método de pago eliminado correctamente', 'success');
        loadClientPaymentMethods(); // Reload the payment methods list
    } catch (error) {
        console.error('Error deleting payment method:', error);
        showToast('Error al eliminar el método de pago', 'error');
    }
}

async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
    }
    
    if (sectionId === 'clientProfile') {
        await showClientProfile();
    }
}

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>

                    <button type="submit" class="btn-primary">Guardar Cambios</button>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfileEvents();
        loadClientAddresses();
        loadClientServiceHistory('active');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

async function getUnreadNotificationsCount() {
    if (!auth.currentUser) return 0;

    try {
        const [requests, payments, messages] = await Promise.all([
            getUnreadRequestsCount(),
            getUnreadPaymentsCount(),
            getUnreadMessagesCount()
        ]);

        return requests + payments + messages;
    } catch (error) {
        console.error('Error getting notification count:', error);
        return 0;
    }
}

async function getUnreadRequestsCount() {
    if (!auth.currentUser) return 0;

    try {
        const snapshot = await db.collection('requests')
            .where('professionalId', '==', auth.currentUser.uid)
            .where('status', '==', 'pending')
            .where('read', '==', false)
            .get();

        return snapshot.size;
    } catch (error) {
        console.error('Error getting requests count:', error);
        return 0;
    }
}

async function getUnreadPaymentsCount() {
    if (!auth.currentUser) return 0;

    try {
        const snapshot = await db.collection('payments')
            .where('userId', '==', auth.currentUser.uid)
            .where('status', 'in', ['completed', 'failed'])
            .where('read', '==', false)
            .get();

        return snapshot.size;
    } catch (error) {
        console.error('Error getting payments count:', error);
        return 0;
    }
}

async function getUnreadMessagesCount() {
    if (!auth.currentUser) return 0;

    try {
        const snapshot = await db.collection('messages')
            .where('recipientId', '==', auth.currentUser.uid)
            .where('read', '==', false)
            .get();

        return snapshot.size;
    } catch (error) {
        console.error('Error getting messages count:', error);
        return 0;
    }
}

function refreshNotifications() {
    if (!auth.currentUser) return;

    const requestsList = document.querySelector('#requestsNotifications .notifications-list');
    const paymentsList = document.querySelector('#paymentsNotifications .notifications-list');
    const messagesList = document.querySelector('#messagesNotifications .notifications-list');

    if (requestsList) loadRequestNotifications(requestsList);
    if (paymentsList) loadPaymentNotifications(paymentsList);
    if (messagesList) loadMessageNotifications(messagesList);
}

async function loadRequestNotifications(container) {
    if (!auth.currentUser) return;

    try {
        // Updated query to use the composite index
        const snapshot = await db.collection('requests')
            .where('professionalId', '==', auth.currentUser.uid)
            .where('status', '==', 'pending')
            .orderBy('createdAt', 'desc')
            .limit(5)
            .get();

        container.innerHTML = '';
        
        if (snapshot.empty) {
            container.innerHTML = '<p class="no-notifications">No hay solicitudes pendientes</p>';
            return;
        }

        snapshot.forEach(doc => {
            const data = doc.data();
            container.appendChild(createNotificationElement({
                type: 'request',
                title: 'Nueva solicitud de servicio',
                message: `Cliente: ${data.clientName}`,
                time: data.createdAt?.toDate()
            }));
        });
    } catch (error) {
        console.error('Error loading request notifications:', error);
        if (error.code === 'failed-precondition') {
            console.log('Create the index here:', error.details);
        }
        container.innerHTML = '<p class="error-message">Error al cargar notificaciones</p>';
    }
}

async function loadPaymentNotifications(container) {
    // Similar implementation for payments
    // ...
}

async function loadMessageNotifications(container) {
    // Similar implementation for messages
    // ...
}

function createNotificationElement({ type, title, message, time }) {
    const div = document.createElement('div');
    div.className = `notification-item ${type}`;
    div.innerHTML = `
        <h4>${title}</h4>
        <p>${message}</p>
        <span class="notification-time">${formatTime(time)}</span>
    `;
    return div;
}

function formatTime(date) {
    if (!date) return '';
    
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
}

async function handleProfessionalLogin(event) {
    event.preventDefault();
    console.log('Professional login attempt');
    
    try {
        const email = document.getElementById('loginEmailProfesional').value;
        const password = document.getElementById('loginPasswordProfesional').value;

        await auth.signInWithEmailAndPassword(email, password);
        // Auth state listener will handle the rest
        
    } catch (error) {
        console.error('Login error:', error);
        showToast('Error: ' + error.message, 'error');
    }
}

async function handleClientLogin(event) {
    event.preventDefault();
    console.log('Client login attempt');
    
    try {
        const email = document.getElementById('loginEmailCliente').value;
        const password = document.getElementById('loginPasswordCliente').value;

        await auth.signInWithEmailAndPassword(email, password);
        // Auth state listener will handle the rest
        
    } catch (error) {
        console.error('Login error:', error);
        showToast('Error: ' + error.message, 'error');
    }
}

// Single DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // Add registration form handlers
    const formRegistroProfesional = document.getElementById("formRegistroProfesional");
    const formRegistroCliente = document.getElementById("formRegistroCliente");
    const homeButton = document.getElementById('homeButton');
    const registroBtn = document.getElementById('registroBtn');
    const loginBtn = document.getElementById('loginBtn');
    
    // Add province change listeners and initialize localities dropdowns
    const provinciaSelect = document.getElementById('provincia');
    const provinciaClienteSelect = document.getElementById('provinciaCliente');
    const localidadSelect = document.getElementById('localidad');
    const localidadClienteSelect = document.getElementById('localidadCliente');

    // Set up registration form handlers
    if (formRegistroProfesional) {
        formRegistroProfesional.addEventListener("submit", handleProfessionalRegistration);
    }

    if (formRegistroCliente) {
        formRegistroCliente.addEventListener("submit", handleClientRegistration);
    }

    // Set up province change listeners
    if (provinciaSelect) {
        provinciaSelect.addEventListener('change', updateLocalidades);
        localidadSelect.disabled = true;
    }

    if (provinciaClienteSelect) {
        provinciaClienteSelect.addEventListener('change', updateLocalidadesCliente);
        localidadClienteSelect.disabled = true;
    }

    // Set up navigation buttons
    if (registroBtn) {
        registroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('registro');
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('iniciarSesion');
        });
    }

    if (homeButton) {
        homeButton.addEventListener('click', () => {
            const isLoggedIn = auth.currentUser !== null;
            if (isLoggedIn) {
                const userRole = localStorage.getItem('userRole');
                showSection(userRole === 'Profesional' ? 'dashboardProfesional' : 'dashboardCliente');
            } else {
                document.querySelectorAll('main > section').forEach(section => {
                    section.classList.add('hidden');
                });
                ['bienvenida', 'comoFunciona', 'contacto'].forEach(id => {
                    const welcomeSection = document.getElementById(id);
                    if (welcomeSection) {
                        welcomeSection.classList.remove('hidden');
                    }
                });
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    console.log('DOM loaded, initializing Firebase');
    initializeFirebase();
});

async function handleProfessionalRegistration(event) {
    event.preventDefault();
    
    try {
        const formData = {
            nombre: document.getElementById('nombreProfesional').value,
            especialidad: document.getElementById('especialidad').value,
            provincia: document.getElementById('provincia').value,
            localidad: document.getElementById('localidad').value,
            direccion: document.getElementById('direccion').value,
            telefono: document.getElementById('telefono').value,
            email: document.getElementById('emailProfesional').value,
            password: document.getElementById('passwordProfesional').value,
            experiencia: document.getElementById('experiencia').value,
            precioBase: document.getElementById('precioBase').value,
            disponibilidad: document.getElementById('disponibilidad').value,
            certificaciones: document.getElementById('certificaciones').value
        };

        // Create user account
        const userCredential = await auth.createUserWithEmailAndPassword(formData.email, formData.password);
        
        // Add professional data to Firestore
        await db.collection('profesionales').doc(userCredential.user.uid).set({
            uid: userCredential.user.uid,
            nombre: formData.nombre,
            especialidad: formData.especialidad,
            provincia: formData.provincia,
            localidad: formData.localidad,
            direccion: formData.direccion,
            telefono: formData.telefono,
            email: formData.email,
            experiencia: formData.experiencia,
            precioBase: formData.precioBase,
            disponibilidad: formData.disponibilidad,
            certificaciones: formData.certificaciones ? formData.certificaciones.split('\n') : [],
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            verified: false,
            active: true
        });

        showToast('Registro exitoso como profesional', 'success');
        showSection('dashboardProfesional');
        updateNavigationUI(true, 'Profesional');

    } catch (error) {
        console.error('Error en registro:', error);
        showToast(error.message, 'error');
    }
}

async function handleClientRegistration(event) {
    event.preventDefault();
    
    try {
        const provincia = document.getElementById('provinciaCliente').value;
        const localidad = document.getElementById('localidadCliente').value;
        
        if (!provincia || !localidad) {
            showToast('Por favor seleccione provincia y localidad', 'error');
            return;
        }

        const formData = {
            nombre: document.getElementById('nombreCliente').value,
            provincia: provincia,
            localidad: localidad,
            direccion: document.getElementById('direccionCliente').value,
            email: document.getElementById('emailCliente').value,
            password: document.getElementById('passwordCliente').value,
            descripcion: document.getElementById('descripcionProblema').value
        };

        // Create user account
        const userCredential = await auth.createUserWithEmailAndPassword(formData.email, formData.password);
        
        // Add client data to Firestore
        await db.collection('clientes').doc(userCredential.user.uid).set({
            uid: userCredential.user.uid,
            nombre: formData.nombre,
            provincia: formData.provincia,
            localidad: formData.localidad,
            direccion: formData.direccion,
            email: formData.email,
            descripcion: formData.descripcion,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            active: true
        });

        showToast('Registro exitoso como cliente', 'success');
        showSection('dashboardCliente');
        updateNavigationUI(true, 'Cliente');

    } catch (error) {
        console.error('Error en registro:', error);
        showToast(error.message, 'error');
    }
}

function initializeClientProfile() {
    // Handle client avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    const avatarPreview = document.getElementById('clientAvatarPreview');
    
    if (avatarInput) {
        avatarInput.addEventListener('change', async (e) => {
            await handleClientAvatarUpload(e);
        });
    }

    // Initialize service history tabs
    const tabButtons = document.querySelectorAll('.service-history-tabs .tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadServiceHistory(tab);
        });
    });

    // Load initial data
    loadClientSavedAddresses();
    loadFavoriteServices();
    loadServiceHistory('active');
    loadClientPaymentMethods();
    loadClientPreferences();
}

function initializeClientProfile() {
    // Handle client avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    const avatarPreview = document.getElementById('clientAvatarPreview');
    
    if (avatarInput) {
        avatarInput.addEventListener('change', async (e) => {
            await handleClientAvatarUpload(e);
        });
    }

    // Initialize service history tabs
    const tabButtons = document.querySelectorAll('.service-history-tabs .tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadServiceHistory(tab);
        });
    });

    // Load initial data
    loadClientSavedAddresses();
    loadFavoriteServices();
    loadServiceHistory('active');
    loadClientPaymentMethods();
    loadClientPreferences();
}

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>

                    <button type="submit" class="btn-primary">Guardar Cambios</button>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfileEvents();
        loadClientAddresses();
        loadClientServiceHistory('active');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

function initializeProfile() {
    console.log('Initializing profile');
    
    // Check if auth is initialized
    if (!auth) {
        console.error('Auth not initialized');
        return;
    }

    const perfilBtn = document.getElementById('perfilBtn');
    if (!perfilBtn) {
        console.error('Profile button not found');
        return;
    }

    // Set up auth state listener
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // Show profile button and load profile
            perfilBtn.classList.remove('hidden');
            await loadUserProfile(user.uid);
            
            // Get user role and update UI
            const role = await getUserRole();
            updateNavigationUI(true, role);
            initializeRoleNotifications(role);
        } else {
            // Hide profile button and update UI for logged out state
            perfilBtn.classList.add('hidden');
            updateNavigationUI(false);
            showSection('bienvenida');
        }
    });
}

function logout() {
    try {
        auth.signOut().then(() => {
            localStorage.removeItem('userRole');
            showToast('Sesión cerrada exitosamente', 'success');
            showSection('bienvenida');
            updateNavigationUI(false);
        }).catch((error) => {
            console.error('Error al cerrar sesión:', error);
            showToast('Error al cerrar sesión', 'error');
        });
    } catch (error) {
        console.error('Error en logout:', error);
        showToast('Error al cerrar sesión', 'error');
    }
}

function initializeFirebase() {
    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
        auth = firebase.auth();
        
        // Update Firestore initialization with new cache settings
        db = firebase.firestore();
        db.settings({
            cache: {
                enabled: true,
                persistenceEnabled: true,
                cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
            }
        });
        
        // Remove the deprecated enablePersistence call
        console.log('Firebase initialized successfully with persistent cache');

        // Rest of the initialization code
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log('User logged in:', user.uid);
                try {
                    // Check user type
                    const profDoc = await db.collection('profesionales').doc(user.uid).get();
                    const clientDoc = await db.collection('clientes').doc(user.uid).get();

                    if (profDoc.exists) {
                        localStorage.setItem('userRole', 'Profesional');
                        await loadUserProfile(user.uid); // Load profile data
                        showSection('dashboardProfesional');
                        updateNavigationUI(true, 'Profesional');
                    } else if (clientDoc.exists) {
                        localStorage.setItem('userRole', 'Cliente');
                        await loadUserProfile(user.uid); // Load profile data
                        showSection('dashboardCliente');
                        updateNavigationUI(true, 'Cliente');
                    } else {
                        console.error('User document not found');
                        await auth.signOut();
                        showToast('Error: Usuario no encontrado', 'error');
                    }

                    // Update section visibility based on role
                    const currentSection = document.querySelector('main > section:not(.hidden)');
                    if (!currentSection || currentSection.id === 'bienvenida') {
                        if (profDoc.exists) {
                            showSection('dashboardProfesional');
                        } else if (clientDoc.exists) {
                            showSection('dashboardCliente');
                        }
                    }
                } catch (error) {
                    console.error('Error checking user type:', error);
                    showToast('Error al verificar tipo de usuario', 'error');
                }
            } else {
                console.log('User logged out');
                localStorage.removeItem('userRole');
                updateNavigationUI(false);
                // When logging out, only show welcome if currently showing a protected section
                const currentSection = document.querySelector('main > section:not(.hidden)');
                if (currentSection && !['bienvenida', 'comoFunciona', 'contacto'].includes(currentSection.id)) {
                    showSection('bienvenida');
                }
            }
        });

        console.log('Firebase initialized successfully');
        setupEventListeners();

    } catch (error) {
        console.error('Firebase initialization error:', error);
        showToast('Error al inicializar Firebase', 'error');
    }
}

function setupEventListeners() {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => logout());
    }

    const formLoginProfesional = document.getElementById("formLoginProfesional");
    const formLoginCliente = document.getElementById("formLoginCliente");

    if (formLoginProfesional) {
        formLoginProfesional.addEventListener("submit", handleProfessionalLogin);
        console.log('Professional login form listener added');
    }

    if (formLoginCliente) {
        formLoginCliente.addEventListener("submit", handleClientLogin);
        console.log('Client login form listener added');
    }
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Firebase');
    initializeFirebase();
});

const verificationLevels = {
    basic: {
        name: 'Básico',
        color: '#4caf50',
        icon: '🔰',
        requirements: []
    },
    verified: {
        name: 'Verificado',
        color: '#2196f3',
        icon: '✓',
        requirements: [
            { id: 'id', name: 'DNI/Identificación', type: 'document' },
            { id: 'address', name: 'Comprobante de domicilio', type: 'document' }
        ]
    },
    professional: {
        name: 'Profesional',
        color: '#ff9800',
        icon: '⭐',
        requirements: [
            { id: 'qualification', name: 'Título profesional', type: 'document' },
            { id: 'experience', name: 'Certificado de experiencia', type: 'document' }
        ]
    },
    expert: {
        name: 'Experto',
        color: '#9c27b0',
        icon: '🏆',
        requirements: [
            { id: 'specialization', name: 'Certificados de especialización', type: 'document' },
            { id: 'insurance', name: 'Seguro de responsabilidad civil', type: 'document' },
            { id: 'reviews', name: '50+ reseñas positivas', type: 'achievement' }
        ]
    }
};

function updateVerificationUI(currentLevel) {
    const verificationStatus = document.getElementById('verificationStatus');
    const currentLevelDiv = document.getElementById('currentVerificationLevel');
    const requirementsList = document.getElementById('nextLevelRequirements');
    const pendingDocuments = document.getElementById('pendingDocuments');

    if (!verificationStatus || !currentLevelDiv || !requirementsList || !pendingDocuments) return;

    const levels = Object.keys(verificationLevels);
    const currentIndex = levels.indexOf(currentLevel);
    const nextLevel = levels[currentIndex + 1];

    // Update current level display
    const level = verificationLevels[currentLevel];
    currentLevelDiv.innerHTML = `
        <span style="color: ${level.color}">
            ${level.icon} Nivel ${level.name}
        </span>
    `;

    // Show next level requirements if available
    if (nextLevel) {
        const nextLevelInfo = verificationLevels[nextLevel];
        requirementsList.innerHTML = `
            <h4 style="color: ${nextLevelInfo.color}">
                ${nextLevelInfo.icon} Nivel ${nextLevelInfo.name}
            </h4>
            <ul class="requirements-list">
                ${nextLevelInfo.requirements.map(req => `
                    <li>
                        <span>${req.name}</span>
                        ${req.type === 'document' ? `
                            <input type="file" id="${req.id}" accept=".pdf,.jpg,.jpeg,.png" 
                                   class="document-upload" style="display: none">
                            <button onclick="document.getElementById('${req.id}').click()"
                                    class="upload-btn">Subir</button>
                        ` : ''}
                    </li>
                `).join('')}
            </ul>
        `;
    } else {
        requirementsList.innerHTML = '<p>¡Has alcanzado el nivel máximo!</p>';
    }
}

async function handleVerificationDocument(fileInput, requirementId) {
    const file = fileInput.files[0];
    if (!file) return;

    try {
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(`verification/${auth.currentUser.uid}/${requirementId}/${file.name}`);
        
        await fileRef.put(file);
        const downloadURL = await fileRef.getDownloadURL();

        // Update user's verification documents in Firestore
        await db.collection('profesionales').doc(auth.currentUser.uid).update({
            [`verificationDocuments.${requirementId}`]: {
                url: downloadURL,
                filename: file.name,
                uploadedAt: firebase.firestore.FieldValue.serverTimestamp(),
                status: 'pending'
            }
        });

        showToast('Documento subido exitosamente', 'success');
        await checkVerificationLevel();
    } catch (error) {
        console.error('Error uploading document:', error);
        showToast('Error al subir el documento', 'error');
    }
}

async function checkVerificationLevel() {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('profesionales').doc(auth.currentUser.uid).get();
        const data = doc.data();
        const currentLevel = data.verificationLevel || 'basic';
        updateVerificationUI(currentLevel);
    } catch (error) {
        console.error('Error checking verification level:', error);
    }
}

async function loadUserProfile(uid) {
    if (!uid) return;

    try {
        // First try to find the user in profesionales collection
        let userDoc = await db.collection('profesionales').doc(uid).get();
        let userType = 'Profesional';

        // If not found in profesionales, check clientes collection
        if (!userDoc.exists) {
            userDoc = await db.collection('clientes').doc(uid).get();
            userType = 'Cliente';
        }

        if (!userDoc.exists) {
            console.error('User document not found');
            return;
        }

        const userData = userDoc.data();
        
        // Update profile elements
        document.getElementById('profileName').textContent = userData.nombre || 'Sin nombre';
        document.getElementById('profileRole').textContent = userType;
        
        // Update other profile information if it exists
        if (userType === 'Profesional') {
            // Professional specific fields
            document.getElementById('profileSpecialty').textContent = userData.especialidad || 'No especificada';
            document.getElementById('profileExperience').textContent = `${userData.experiencia || 0} años`;
            document.getElementById('profileBasePrice').textContent = `$${userData.precioBase || 0}`;
            
            // Show verification badge if verified
            const verificationBadge = document.getElementById('verificationBadge');
            if (verificationBadge) {
                if (userData.verified) {
                    verificationBadge.innerHTML = '✓ Verificado';
                    verificationBadge.classList.add('verified');
                } else {
                    verificationBadge.innerHTML = '⚠ Pendiente de verificación';
                    verificationBadge.classList.add('pending');
                }
            }
        }


        // Common fields for both types
        document.getElementById('profileLocation').textContent = 
            `${userData.localidad}, ${userData.provincia}`;
        
        // Update avatar if exists
        const avatarImage = document.getElementById('avatarImage');
        if (avatarImage && userData.avatarUrl) {
            avatarImage.src = userData.avatarUrl;
        }

        // Check and update verification level
        if (userData.verificationLevel) {
            updateVerificationUI(userData.verificationLevel);
        }

        console.log('Profile loaded successfully');

    } catch (error) {
        console.error('Error loading user profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

async function getUserRole() {
    const user = auth.currentUser;
    if (!user) return null;

    try {
        // Check profesionales collection first
        const profDoc = await db.collection('profesionales').doc(user.uid).get();
        if (profDoc.exists) return 'Profesional';

        // Check clientes collection
        const clientDoc = await db.collection('clientes').doc(user.uid).get();
        if (clientDoc.exists) return 'Cliente';

        return null;
    } catch (error) {
        console.error('Error getting user role:', error);
        return null;
    }
}

// ...existing code...

async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
    }
    
    if (sectionId === 'editarPerfil') {
        const role = await getUserRole();
        if (role === 'Cliente') {
            await showClientProfile();
            return;
        }
    }
    
    if (sectionId === 'clientProfile') {
        await showClientProfile();
    }
}

// Update any functions that call showSection to be async as well
async function showForms(sectionId) {
    await showSection(sectionId);
}

// Update the click handlers to handle the async nature
document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
    
    if (registroBtn) {
        registroBtn.addEventListener('click', async () => {
            await showForms('registro');
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            await showForms('iniciarSesion');
        });
    }

    if (homeButton) {
        homeButton.addEventListener('click', async () => {
            await showSection('bienvenida');
        });
    }
    
    // ...existing code...
});

// ...existing code...

// Update the home button click handler
if (homeButton) {
    homeButton.addEventListener('click', () => {
        const isLoggedIn = auth.currentUser !== null;
        if (isLoggedIn) {
            const userRole = localStorage.getItem('userRole');
            showSection(userRole === 'Profesional' ? 'dashboardProfesional' : 'dashboardCliente');
        } else {
            showSection('bienvenida');
        }
    });
}

// Update showForms to use the same logic
function showForms(sectionId) {
    showSection(sectionId); // Use the same showSection function for consistency
}

// Remove showForms function since we're now using showSection for everything

// Update the click handlers in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // ...existing initialization code...

    const registroBtn = document.getElementById('registroBtn');
    const loginBtn = document.getElementById('loginBtn');

    if (registroBtn) {
        registroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('registro');
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('iniciarSesion');
        });
    }

    // ...rest of the initialization code...
});

// Update the click handlers in the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // ...existing initialization code...

    const registroBtn = document.getElementById('registroBtn');
    const loginBtn = document.getElementById('loginBtn');
    const homeButton = document.getElementById('homeButton');

    if (registroBtn) {
        registroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('registro');
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('iniciarSesion');
        });
    }

    if (homeButton) {
        homeButton.addEventListener('click', () => {
            const isLoggedIn = auth.currentUser !== null;
            if (isLoggedIn) {
                const userRole = localStorage.getItem('userRole');
                showSection(userRole === 'Profesional' ? 'dashboardProfesional' : 'dashboardCliente');
            } else {
                // Only show welcome sections when actually going home
                document.querySelectorAll('main > section').forEach(section => {
                    section.classList.add('hidden');
                });
                ['bienvenida', 'comoFunciona', 'contacto'].forEach(id => {
                    const welcomeSection = document.getElementById(id);
                    if (welcomeSection) {
                        welcomeSection.classList.remove('hidden');
                    }
                });
                // Scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // ...rest of initialization code...
});

function showForms(sectionId) {
    // Hide all sections first
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show only the requested form section
    const formSection = document.getElementById(sectionId);
    if (formSection) {
        formSection.classList.remove('hidden');
        formSection.scrollIntoView({ behavior: 'smooth' });
    }
}

async function buscarServicios() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    const resultadosGrid = document.getElementById('resultadosBusqueda');
    
    try {
        loadingSpinner.classList.remove('hidden');
        resultadosGrid.innerHTML = '';

        const categoria = document.getElementById('categoriaServicio').value;
        const busqueda = document.getElementById('busquedaTexto').value.toLowerCase();

        // Get all professionals from Firestore
        const snapshot = await db.collection('profesionales')
            .where('active', '==', true)
            .get();

        if (snapshot.empty) {
            resultadosGrid.innerHTML = '<p>No se encontraron servicios disponibles.</p>';
            return;
        }

        const resultados = [];
        snapshot.forEach(doc => {
            const profesional = doc.data();
            // Filter by category and search text
            if ((!categoria || profesional.especialidad === categoria) &&
                (!busqueda || 
                 profesional.nombre.toLowerCase().includes(busqueda) ||
                 profesional.especialidad.toLowerCase().includes(busqueda) ||
                 profesional.localidad.toLowerCase().includes(busqueda))) {
                resultados.push({
                    id: doc.id,
                    ...profesional
                });
            }
        });

        if (resultados.length === 0) {
            resultadosGrid.innerHTML = '<p>No se encontraron resultados para tu búsqueda.</p>';
            return;
        }

        // Display results
        resultados.forEach(profesional => {
            const card = createServiceCard(profesional);
            resultadosGrid.appendChild(card);
        });

    } catch (error) {
        console.error('Error al buscar servicios:', error);
        showToast('Error al buscar servicios', 'error');
    } finally {
        loadingSpinner.classList.add('hidden');
    }
}

function createServiceCard(profesional) {
    const card = document.createElement('div');
    card.className = 'card-servicio';
    
    // Calculate rating average
    const rating = profesional.ratings ? 
        (profesional.ratings.reduce((a, b) => a + b, 0) / profesional.ratings.length).toFixed(1) : 
        'Sin calificaciones';

    card.innerHTML = `
        <div class="card-header">
            <img src="${profesional.avatarUrl || './images/default-avatar.jpg'}" 
                 alt="Foto de ${profesional.nombre}"
                 class="card-avatar">
            <div class="card-title">
                <h3>${profesional.nombre}</h3>
                <span class="badge">${profesional.especialidad}</span>
            </div>
        </div>
        <div class="card-body">
            <p><i class="fas fa-map-marker-alt"></i> ${profesional.localidad}, ${profesional.provincia}</p>
            <p><i class="fas fa-star"></i> ${rating}</p>
            <p><i class="fas fa-clock"></i> ${profesional.experiencia} años de experiencia</p>
            <p class="price">Desde $${profesional.precioBase}/hora</p>
        </div>
        <div class="card-actions">
            <button onclick="verPerfil('${profesional.id}')" class="btn-primary">Ver Perfil</button>
            <button onclick="contactarProfesional('${profesional.id}')" class="btn-secondary">Contactar</button>
        </div>`;

    return card;
}

// ...existing code...

// Remove duplicate homeButton event listener code and replace with this single implementation
document.addEventListener('DOMContentLoaded', () => {
    // ...existing initialization code...
    
    const homeButton = document.getElementById('homeButton');
    if (homeButton) {
        // Remove any existing listeners
        const newHomeButton = homeButton.cloneNode(true);
        homeButton.parentNode.replaceChild(newHomeButton, homeButton);
        
        // Add new event listener
        newHomeButton.addEventListener('click', () => {
            const isLoggedIn = auth.currentUser !== null;
            if (isLoggedIn) {
                const userRole = localStorage.getItem('userRole');
                showSection(userRole === 'Profesional' ? 'dashboardProfesional' : 'dashboardCliente');
            } else {
                document.querySelectorAll('main > section').forEach(section => {
                    section.classList.add('hidden');
                });
                ['bienvenida', 'comoFunciona', 'contacto'].forEach(id => {
                    const welcomeSection = document.getElementById(id);
                    if (welcomeSection) {
                        welcomeSection.classList.remove('hidden');
                    }
                });
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ...rest of initialization code...
});

// Remove any other homeButton event listener code elsewhere in the file
// ...existing code...

function initDarkMode() {
    const storedTheme = localStorage.getItem('darkMode');
    if (storedTheme === 'true') {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
        const button = document.getElementById('toggleMode');
        if (button) button.textContent = '☀️ Modo Claro';
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
    
    const button = document.getElementById('toggleMode');
    if (button) {
        button.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    }
    
    localStorage.setItem('darkMode', isDark);
    console.log('Dark mode toggled:', { isDark, button: button?.textContent });
}

// Update the DOMContentLoaded listener to include dark mode initialization
document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
    
    // Initialize dark mode
    initDarkMode();
    
    // Set up dark mode toggle
    const darkModeToggle = document.getElementById('toggleMode');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // ...existing code...
});

// ...existing code...

// ...existing code...

function loadProfileDetails(userRole) {
    const container = document.getElementById('profileDetailsContainer');
    
    if (userRole === 'Cliente') {
        container.innerHTML = `
            <div class="client-profile-section">
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="./images/default-avatar.png" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                                Cambiar foto
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div class="addresses-container">
                    <div id="savedAddresses" class="saved-addresses"></div>
                    <button onclick="showAddAddressForm()" class="btn-secondary">
                        <span class="add-icon">+</span> Agregar Nueva Dirección
                    </button>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Servicios Favoritos</h3>
                <div class="favorite-services">
                    <div id="favoriteServicesList" class="favorites-grid"></div>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active">Activos</button>
                    <button class="tab-btn" data-tab="completed">Completados</button>
                    <button class="tab-btn" data-tab="cancelled">Cancelados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content"></div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias de Servicio</h3>
                <div class="preferences-container">
                    <div class="preference-item">
                        <span>Notificaciones por Email</span>
                        <label class="switch">
                            <input type="checkbox" id="emailPreference">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="preference-item">
                        <span>Notificaciones por WhatsApp</span>
                        <label class="switch">
                            <input type="checkbox" id="whatsappPreference">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="preference-item">
                        <span>Recordatorios de Servicio</span>
                        <label class="switch">
                            <input type="checkbox" id="reminderPreference">
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Métodos de Pago</h3>
                <div id="paymentMethodsList" class="payment-methods-list"></div>
                <button onclick="showAddPaymentMethod()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Método de Pago
                </button>
            </div>
        `;

        // Initialize client-specific event listeners and functionality
        initializeClientProfile();
    } else {
        // Keep existing professional profile code
        loadProfessionalProfile();
    }
}

function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

function initializeClientProfile() {
    // Handle client avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    const avatarPreview = document.getElementById('clientAvatarPreview');
    
    if (avatarInput) {
        avatarInput.addEventListener('change', async (e) => {
            await handleClientAvatarUpload(e);
        });
    }

    // Initialize service history tabs
    const tabButtons = document.querySelectorAll('.service-history-tabs .tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadServiceHistory(tab);
        });
    });

    // Load initial data
    loadClientSavedAddresses();
    loadFavoriteServices();
    loadServiceHistory('active');
    loadClientPaymentMethods();
    loadClientPreferences();
}

function initializeClientProfile() {
    // Handle client avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    const avatarPreview = document.getElementById('clientAvatarPreview');
    
    if (avatarInput) {
        avatarInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    const imageUrl = await uploadClientAvatar(file);
                    avatarPreview.src = imageUrl;
                    showToast('Foto de perfil actualizada', 'success');
                } catch (error) {
                    console.error('Error uploading avatar:', error);
                    showToast('Error al subir la foto', 'error');
                }
            }
        });
    }

    // Initialize service history tabs
    const tabButtons = document.querySelectorAll('.service-history-tabs .tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadServiceHistory(button.dataset.tab);
        });
    });

    // Load initial data
    loadClientSavedAddresses();
    loadFavoriteServices();
    loadServiceHistory('active');
    loadClientPaymentMethods();
    loadClientPreferences();
}

// Add these new helper functions
async function uploadClientAvatar(file) {
    if (!auth.currentUser) throw new Error('No user logged in');
    
    const storageRef = firebase.storage().ref();
    const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);
    
    await avatarRef.put(file);
    const downloadUrl = await avatarRef.getDownloadURL();
    
    await db.collection('clientes').doc(auth.currentUser.uid).update({
        avatarUrl: downloadUrl
    });
    
    return downloadUrl;
}

function loadClientSavedAddresses() {
    const container = document.getElementById('savedAddresses');
    if (!container) return;

    // Fetch and display addresses
    db.collection('clientes')
        .doc(auth.currentUser.uid)
        .collection('addresses')
        .onSnapshot(snapshot => {
            container.innerHTML = '';
            snapshot.forEach(doc => {
                const address = doc.data();
                container.appendChild(createAddressCard(address, doc.id));
            });
        });
}

function createAddressCard(address, addressId) {
    const card = document.createElement('div');
    card.className = 'address-card';
    card.innerHTML = `
        <div class="address-info">
            <h4>${address.alias || 'Dirección'}</h4>
            <p>${address.street}, ${address.city}</p>
            <p>${address.province}</p>
        </div>
        <div class="address-actions">
            <button onclick="editAddress('${addressId}')" class="btn-icon">✏️</button>
            <button onclick="deleteAddress('${addressId}')" class="btn-icon">🗑️</button>
        </div>
    `;
    return card;
}

// ...existing code...

function initializeProfile() {
    console.log('Initializing profile');
    
    if (!auth) return;

    auth.onAuthStateChanged(async (user) => {
        if (user) {
            const role = await getUserRole();
            if (role === 'Cliente') {
                // Hide professional-only elements
                document.querySelectorAll('.professional-only').forEach(el => {
                    el.classList.add('hidden');
                });
                
                // Show client-specific elements
                document.querySelectorAll('.client-only').forEach(el => {
                    el.classList.remove('hidden');
                });
                
                // Load client profile
                loadProfileDetails('Cliente');
            } else {
                // Keep existing professional profile logic
                loadProfileDetails('Profesional');
            }
        }
    });
}

// ...existing code...

async function loadClientProfile() {
    const container = document.getElementById('profileDetailsContainer');
    if (!container || !auth.currentUser) return;

    try {
        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();
        
        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Mi Perfil</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>

                    <button type="submit" class="btn-primary">Guardar Cambios</button>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses"></div>
                <button onclick="showAddAddressModal()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Servicios Contratados</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active">Activos</button>
                    <button class="tab-btn" data-tab="completed">Completados</button>
                </div>
                <div id="clientServiceHistory" class="service-history-content"></div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize event listeners
        initializeClientProfileEvents();
        loadClientAddresses();
        loadClientServiceHistory('active');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

async function loadClientServiceHistory(tab) {
    const container = document.getElementById('clientServiceHistory');
    if (!container || !auth.currentUser) return;

    try {
        const snapshot = await db.collection('servicios')
            .where('clientId', '==', auth.currentUser.uid)
            .where('status', '==', tab)
            .get();

        container.innerHTML = '';
        
        if (snapshot.empty) {
            container.innerHTML = '<p>No hay servicios que mostrar</p>';
            return;
        }

        snapshot.forEach(doc => {
            const service = doc.data();
            container.appendChild(createClientServiceCard(service, doc.id));
        });
    } catch (error) {
        console.error('Error loading service history:', error);
        showToast('Error al cargar el historial de servicios', 'error');
    }
}

function createClientServiceCard(service, serviceId) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
        <h4>${service.serviceType}</h4>
        <p><strong>Profesional:</strong> ${service.professionalName}</p>
        <p><strong>Fecha:</strong> ${service.date}</p>
        <p><strong>Estado:</strong> ${service.status}</p>
        <p><strong>Precio:</strong> $${service.price}</p>
        <div class="card-actions">
            ${service.status === 'active' ? 
                `<button onclick="cancelService('${serviceId}')" class="btn-secondary">Cancelar</button>` : 
                ''}
            ${service.status === 'completed' && !service.rated ? 
                `<button onclick="showRatingModal('${serviceId}')" class="btn-primary">Calificar</button>` : 
                ''}
        </div>
    `;
    return card;
}

// Update the showSection function to handle client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const newModal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

    if (addressId) {
        await updateAddress(addressId, addressData);
    } else {
        await addNewAddress(addressData);
    }
    closeAddressModal();
};

function closeAddressModal() {
}

// ...existing code...

async function handlePasswordReset(event) {
    event.preventDefault();
    const email = document.getElementById('resetEmail').value;

    try {
        await firebase.auth().sendPasswordResetEmail(email);
        alert('Se ha enviado un correo para restablecer su contraseña. Por favor, revise su bandeja de entrada.');
    } catch (error) {
        console.error('Error al enviar el correo de restablecimiento:', error);
        alert('Error al enviar el correo de restablecimiento. Verifique el correo ingresado.');
    }
}

// Attach the function to a button or form
const resetPasswordForm = document.getElementById('resetPasswordForm');
if (resetPasswordForm) {
    resetPasswordForm.addEventListener('submit', handlePasswordReset);
}

    const existingModal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

async function loadServiceHistory(tab) {
    const container = document.getElementById('serviceHistoryContent');
    if (!container || !auth.currentUser) return;

    try {
        const snapshot = await db.collection('servicios')
            .where('clientId', '==', auth.currentUser.uid)
            .where('status', '==', tab)
            .get();

        container.innerHTML = '';
        
        if (snapshot.empty) {
            container.innerHTML = '<p>No hay servicios que mostrar</p>';
            return;
        }

        snapshot.forEach(doc => {
            const service = doc.data();
            container.appendChild(createClientServiceCard(service, doc.id));
        });
    } catch (error) {
        console.error('Error loading service history:', error);
        showToast('Error al cargar el historial de servicios', 'error');
    }
}

function createClientServiceCard(service, serviceId) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
        <h4>${service.serviceType}</h4>
        <p><strong>Profesional:</strong> ${service.professionalName}</p>
        <p><strong>Fecha:</strong> ${service.date}</p>
        <p><strong>Estado:</strong> ${service.status}</p>
        <p><strong>Precio:</strong> $${service.price}</p>
        <div class="card-actions">
            ${service.status === 'active' ? 
                `<button onclick="cancelService('${serviceId}')" class="btn-secondary">Cancelar</button>` : 
                ''}
            ${service.status === 'completed' && !service.rated ? 
                `<button onclick="showRatingModal('${serviceId}')" class="btn-primary">Calificar</button>` : 
                ''}
        </div>
    `;
    return card;
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>

                    <button type="submit" class="btn-primary">Guardar Cambios</button>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfileEvents();
        loadClientAddresses();
        loadClientServiceHistory('active');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // Attach navigation handlers to buttons or links
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
}
initializeNavigationHandlers(); // Ensure this function is called

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

editAddress('exampleAddressId123'); // Example invocation to use the function
// Example usage: deleteAddress('addressId123');
deleteAddress('exampleAddressId123'); // Example invocation to use the function

// Removed duplicate definition of showAddressForm to avoid conflicts

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

// Removed duplicate definition of showAddressForm to avoid conflicts

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        loadServiceHistory('active');
        loadClientPaymentMethods();
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// Load client service history
async function loadClientServiceHistory(tab) {
    const serviceHistoryContent = document.getElementById('serviceHistoryContent');
    if (!serviceHistoryContent) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('serviceHistory')
            .where('status', '==', tab)
            .get();

        serviceHistoryContent.innerHTML = '';

        if (snapshot.empty) {
            serviceHistoryContent.innerHTML = '<p>No hay servicios en esta categoría</p>';
            return;
        }

        snapshot.forEach(doc => {
            const service = doc.data();
            const serviceCard = createServiceCard(service, doc.id);
            serviceHistoryContent.appendChild(serviceCard);
        });
    } catch (error) {
        console.error('Error loading service history:', error);
        showToast('Error al cargar el historial de servicios', 'error');
    }
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}

async function addNewAddress(addressData) {
    if (!auth.currentUser) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .add(addressData);

        showToast('Dirección agregada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error adding address:', error);
        showToast('Error al agregar la dirección', 'error');
    }
}

async function editAddress(addressId) {
    if (!auth.currentUser) return;

    try {
        const doc = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .get();

        if (!doc.exists) {
            showToast('Dirección no encontrada', 'error');
            return;
        }

        const address = doc.data();
        showAddressForm(address, addressId); // Show form with existing data
    } catch (error) {
        console.error('Error editing address:', error);
        showToast('Error al editar la dirección', 'error');
    }
}

async function deleteAddress(addressId) {
    if (!confirm('¿Está seguro de eliminar esta dirección?')) return;

    try {
        await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .doc(addressId)
            .delete();

        showToast('Dirección eliminada correctamente', 'success');
        loadClientAddresses(); // Reload the addresses list
    } catch (error) {
        console.error('Error deleting address:', error);
        showToast('Error al eliminar la dirección', 'error');
    }
}

function showAddressForm(address = null, addressId = null) {
    const modalHtml = `
        <div class="modal-content">
            <h3>${address ? 'Editar' : 'Agregar'} Dirección</h3>
            <form id="addressForm">
                <div class="form-group">
                    <label for="addressAlias">Alias (ej: Casa, Trabajo)</label>
                    <input type="text" id="addressAlias" value="${address?.alias || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressStreet">Calle y Número</label>
                    <input type="text" id="addressStreet" value="${address?.street || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressCity">Ciudad</label>
                    <input type="text" id="addressCity" value="${address?.city || ''}" required>
                </div>
                <div class="form-group">
                    <label for="addressProvince">Provincia</label>
                    <input type="text" id="addressProvince" value="${address?.province || ''}" required>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onclick="closeAddressModal()">Cancelar</button>
            </form>
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalHtml;
    document.body.appendChild(modal);

    const form = modal.querySelector('#addressForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            alias: form.addressAlias.value,
            street: form.addressStreet.value,
            city: form.addressCity.value,
            province: form.addressProvince.value
        };

        if (addressId) {
            await updateAddress(addressId, addressData);
        } else {
            await addNewAddress(addressData);
        }

        closeAddressModal();
    };
}

function closeAddressModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ...existing code...

async function loadFavoriteServices() {
    try {
        const favoriteProfessionalsContainer = document.getElementById('favoriteProfessionals');
        if (!favoriteProfessionalsContainer) return;

        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('favoriteProfessionals')
            .get();

        favoriteProfessionalsContainer.innerHTML = '';

        if (snapshot.empty) {
            favoriteProfessionalsContainer.innerHTML = '<p>No hay profesionales favoritos</p>';
            return;
        }

        snapshot.forEach(doc => {
            const professional = doc.data();
            const professionalCard = createProfessionalCard(professional, doc.id);
            favoriteProfessionalsContainer.appendChild(professionalCard);
        });
    } catch (error) {
        console.error('Error loading favorite professionals:', error);
        showToast('Error al cargar los profesionales favoritos', 'error');
    }
}

async function showClientProfile() {
    try {
        const container = document.getElementById('profileDetailsContainer');
        if (!container || !auth.currentUser) {
            console.error('Container or user not found');
            return;
        }

        const userDoc = await db.collection('clientes').doc(auth.currentUser.uid).get();
        const userData = userDoc.data();

        if (!userData) {
            showToast('Error: No se encontró el perfil del cliente', 'error');
            return;
        }

        container.innerHTML = `
            <div class="client-profile-section">
                <h3>Información Personal</h3>
                <form id="clientProfileForm" class="edit-profile-form">
                    <div class="profile-photo-section">
                        <div class="profile-avatar-upload">
                            <img id="clientAvatarPreview" src="${userData.avatarUrl || './images/default-avatar.png'}" alt="Avatar del cliente">
                            <label for="clientAvatarInput" class="btn-upload">
                                <span class="upload-icon">📷</span>
                            </label>
                            <input type="file" id="clientAvatarInput" accept="image/*" class="hidden">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientNombreEdit">Nombre:</label>
                        <input type="text" id="clientNombreEdit" value="${userData.nombre || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientEmailEdit">Email:</label>
                        <input type="email" id="clientEmailEdit" value="${userData.email || ''}" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="clientTelefonoEdit">Teléfono:</label>
                        <input type="tel" id="clientTelefonoEdit" value="${userData.telefono || ''}">
                    </div>
                </form>
            </div>

            <div class="client-profile-section">
                <h3>Mis Direcciones</h3>
                <div id="savedAddresses" class="saved-addresses">
                    <p>Cargando direcciones...</p>
                </div>
                <button onclick="showAddressForm()" class="btn-secondary">
                    <span class="add-icon">+</span> Agregar Nueva Dirección
                </button>
            </div>

            <div class="client-profile-section">
                <h3>Profesionales Favoritos</h3>
                <div id="favoriteProfessionals" class="favorite-professionals">
                    <p>Cargando favoritos...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Historial de Servicios</h3>
                <div class="service-history-tabs">
                    <button class="tab-btn active" data-tab="active" onclick="loadClientServiceHistory('active')">Activos</button>
                    <button class="tab-btn" data-tab="completed" onclick="loadClientServiceHistory('completed')">Completados</button>
                </div>
                <div id="serviceHistoryContent" class="service-history-content">
                    <p>Cargando historial...</p>
                </div>
            </div>

            <div class="client-profile-section">
                <h3>Preferencias</h3>
                <div class="preferences-container">
                    <label class="preference-item">
                        <span>Notificaciones por Email</span>
                        <input type="checkbox" id="emailPreference" ${userData.preferences?.email ? 'checked' : ''}>
                    </label>
                    <label class="preference-item">
                        <span>Notificaciones Push</span>
                        <input type="checkbox" id="pushPreference" ${userData.preferences?.push ? 'checked' : ''}>
                    </label>
                </div>
            </div>
        `;

        // Initialize all client profile components
        initializeClientProfile();
        
        // Show the profile section
        showSection('editarPerfil');
        
    } catch (error) {
        console.error('Error loading client profile:', error);
        showToast('Error al cargar el perfil', 'error');
    }
}

// Update the click handler initialization
function initializeNavigationHandlers() {
    // ...existing code...
    
    const clientProfileBtn = document.getElementById('clientProfileBtn');
    if (clientProfileBtn) {
        clientProfileBtn.onclick = () => showClientProfile();
    }
    
    // ...existing code...
}

// Update showSection to handle the client profile
async function showSection(sectionId) {
    const welcomeSections = ['bienvenida', 'comoFunciona', 'contacto'];
    const isWelcomeSection = welcomeSections.includes(sectionId);
    
    // First, hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        
        // Reset positioning for non-welcome sections
        if (!welcomeSections.includes(section.id)) {
            section.style.marginTop = '70px';
        }
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        
        // Handle welcome sections differently
        welcomeSections.forEach(welcomeId => {
            const welcomeSection = document.getElementById(welcomeId);
            if (welcomeSection) {
                if (isWelcomeSection) {
                    welcomeSection.classList.remove('hidden');
                    welcomeSection.style.position = 'relative';
                } else {
                    welcomeSection.classList.add('hidden');
                    welcomeSection.style.position = 'absolute';
                }
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    if (sectionId === 'clientProfile') {
        await loadClientProfile();
    }
}

// ...existing code...

async function handleClientAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const previewImg = document.getElementById('clientAvatarPreview');
        const storageRef = firebase.storage().ref();
        const avatarRef = storageRef.child(`clientAvatars/${auth.currentUser.uid}`);

        // Show loading state
        previewImg.style.opacity = '0.5';
        
        // Upload file
        const snapshot = await avatarRef.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        // Update database
        await db.collection('clientes').doc(auth.currentUser.uid).update({
            avatarUrl: downloadUrl
        });

        // Update preview
        previewImg.src = downloadUrl;
        previewImg.style.opacity = '1';
        
        showToast('Foto de perfil actualizada', 'success');
    } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast('Error al actualizar la foto de perfil', 'error');
    }
}

async function handleClientProfileUpdate(event) {
    event.preventDefault();

    try {
        const formData = {
            nombre: document.getElementById('clientNombreEdit').value,
            telefono: document.getElementById('clientTelefonoEdit').value
        };

        await db.collection('clientes').doc(auth.currentUser.uid).update(formData);
        showToast('Perfil actualizado correctamente', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error al actualizar el perfil', 'error');
    }
}

async function updateClientPreferences() {
    try {
        const emailPref = document.getElementById('emailPreference').checked;
        const pushPref = document.getElementById('pushPreference').checked;

        await db.collection('clientes').doc(auth.currentUser.uid).update({
            'preferences.email': emailPref,
            'preferences.push': pushPref
        });

        showToast('Preferencias actualizadas', 'success');
    } catch (error) {
        console.error('Error updating preferences:', error);
        showToast('Error al actualizar preferencias', 'error');
    }
}

// Update initializeClientProfileEvents to use the new functions
function initializeClientProfileEvents() {
    // Handle avatar upload
    const avatarInput = document.getElementById('clientAvatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', handleClientAvatarUpload);
    }

    // Handle profile form submission
    const profileForm = document.getElementById('clientProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleClientProfileUpdate);
    }

    // Handle preferences changes
    const emailPref = document.getElementById('emailPreference');
    const pushPref = document.getElementById('pushPreference');
    if (emailPref) emailPref.addEventListener('change', updateClientPreferences);
    if (pushPref) pushPref.addEventListener('change', updateClientPreferences);
}

// ...existing code...

async function loadClientAddresses() {
    if (!auth.currentUser) return;
    
    const addressesContainer = document.getElementById('savedAddresses');
    if (!addressesContainer) return;

    try {
        const snapshot = await db.collection('clientes')
            .doc(auth.currentUser.uid)
            .collection('addresses')
            .get();
        

        addressesContainer.innerHTML = '';

        if (snapshot.empty) {
            addressesContainer.innerHTML = '<p>No hay direcciones guardadas</p>';
            return;
        }

        snapshot.forEach(doc => {
            const address = doc.data();
            const addressCard = createAddressCard(address, doc.id);
            addressesContainer.appendChild(addressCard);
        });
    } catch (error) {
        console.error('Error loading addresses:', error);
        showToast('Error al cargar las direcciones', 'error');
    }
}
}
        