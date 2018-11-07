console.log('');
console.log('How to install the root ca certificate');
console.log('');
console.log('OSX:');
console.log('  * Open ~/.dev-cert-authority in finder');
console.log('  * Double click on rootCA.pem');
console.log('  * Keychain should open, find the certificate called "Dev Cert Authority", double click it');
console.log('  * Expand `trust` and change "When using this certificate" to "always trust"');
console.log('  * Close window and authorize with your system password if required');
console.log('');
console.log('Ubuntu:');
console.log('  * Open ~/.dev-cert-authority in Terminal');
console.log('  * Convert the rootCA.pem file to a CRT file');
console.log('      $ openssl x509 -in rootCA.pem -inform PEM -out rootCA.crt');
console.log('  * Add the rootCA.crt file to the list of CA certificates');
console.log('      $ sudo ln -s ~/.dev-cert-authority/rootCA.crt /usr/share/ca-certificates/dev-rootCA.crt');
console.log('  * Update the CA list');
console.log('      $ sudo update-ca-certificates');


