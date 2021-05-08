(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~patient-patient-module~patients-patients-module"],{

/***/ "BZTz":
/*!*******************************************!*\
  !*** ./src/app/patient/patient.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-select {\n  width: 100%;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhdGllbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUVBLHVCQUFBO0FBQUoiLCJmaWxlIjoicGF0aWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH0iXX0= */");

/***/ }),

/***/ "KwmR":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"isNewPatient\">\n        Add new patient\n    </ion-title>\n    <ion-title *ngIf=\"!isNewPatient && data.name != ''\">\n        {{data.name}}\n    </ion-title>\n    <ion-buttons *ngIf=\"!isNewPatient && data.name != ''\" slot=\"end\">\n      <ion-button fill=\"solid\" color=\"success\" [routerLink]=\"'/patients/' + data['idPatient'] + '/tests'\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        ADD NEW TEST\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card mode=\"ios\">\n          <ion-card-content>\n            <ion-list-header>\n              <ion-label>PERSONAL INFO</ion-label>\n            </ion-list-header>\n            <ion-list>\n              <ion-item>\n                <ion-label position=\"floating\">Full name <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input [(ngModel)]=\"data.name\" required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Second language name <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input [(ngModel)]=\"data.enName\" required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Birthdate <ion-text color=\"danger\">*</ion-text></ion-label>\n                <!-- <ion-datetime (ionChange)=\"fixDate()\"  mode=\"md\" displayFormat=\"YYYY-MM-DD\"></ion-datetime> -->\n                <ion-input (ionChange)=\"fixDate()\" type=\"date\" placeholder=\"Birthdate\" [(ngModel)]=\"data.dob\"></ion-input>\n              </ion-item>\n              <br>\n              <ion-item>\n                <!-- \n                <ion-select [(ngModel)]=\"data.nationalityId\"  mode=\"md\" placeholder=\"Select One\">\n                  <ion-select-option *ngFor=\"let nationality of nationalities\" [value]=\"nationality.idNationality\">{{nationality.nationalName}}</ion-select-option>\n                </ion-select> -->\n                <ion-label>Nationality <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ionic-selectable\n                [(ngModel)]=\"data.nationalityId\"\n                [items]=\"nationalities\"\n                itemValueField=\"idNationality\"\n                itemTextField=\"nationalName\"\n                [canSearch]=\"true\">\n              </ionic-selectable>\n\n\n              </ion-item>\n              <br>\n              <ion-item>\n                <ion-label>Gender <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-select [(ngModel)]=\"data.gender\"  mode=\"md\" placeholder=\"Select One\">\n                  <ion-select-option value=\"1\">Female</ion-select-option>\n                  <ion-select-option value=\"0\">Male</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <br>\n              <ion-item>\n                <ion-label>Document ID <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input (ionChange)=\"generateEmail()\" [(ngModel)]=\"data.documentId\"  required></ion-input>\n                <ion-button slot=\"end\" fill=\"clear\" (click)=\"fileSelect.click()\">\n                  <ion-icon slot=\"start\" name=\"scan\"></ion-icon>\n                  SCAN\n                </ion-button>\n              </ion-item>\n\n              {{documentName}}\n              <input style=\"display: none\" #fileSelect (change)=\"onFileChange($event)\" type=\"file\" id=\"fileUpload\">\n\n              <img *ngIf=\"isNewPatient\" src=\"assets/icon/passport.jpeg\" alt=\"\">\n              <img *ngIf=\"!isNewPatient\" [src]=\"api + data.documentPhoto.photoPath\" alt=\"\">\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card mode=\"ios\">\n          <ion-card-content>\n            <ion-list-header>\n              <ion-label>ADDITIONAL INFO</ion-label>\n            </ion-list-header>\n            <ion-item>\n              <ion-label position=\"floating\">Phone <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input [(ngModel)]=\"data.phone\" type=\"number\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Address <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input [(ngModel)]=\"data.address\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              \n              <ion-label position=\"floating\">Email address <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input [(ngModel)]=\"data.email\" required></ion-input>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">Height</ion-label>\n                  <ion-input [(ngModel)]=\"data.height\" type=\"number\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">Weight</ion-label>\n                  <ion-input [(ngModel)]=\"data.weight\" type=\"number\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <br>\n            <ion-item>\n              <ion-label>Is patient a smoker</ion-label>\n              <ion-toggle [(ngModel)]=\"data.smoker\" slot=\"end\"></ion-toggle>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-label>Relationship</ion-label>\n              <ion-select [(ngModel)]=\"data.relationship\" mode=\"md\" value=\"0\" placeholder=\"Select One\">\n                <ion-select-option value=\"0\">Single</ion-select-option>\n                <ion-select-option value=\"1\">Married</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <br>\n            <ion-item>\n              <img src=\"assets/icon/muna.svg\" alt=\"\">\n              <ion-label> &nbsp; &nbsp; Integrate with MUNA</ion-label>\n              <ion-toggle [(ngModel)]=\"muna\" slot=\"end\"></ion-toggle>\n            </ion-item>\n            <br>\n              <img style=\"width: 300px; border-radius: 20px;\" [src]=\"snapshot\" *ngIf=\"snapshot != ''\" alt=\"\">\n              <webcam [height]=\"300\" [width]=\"300\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\n\t\t [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\" [videoOptions]=\"videoOptions\" (cameraSwitched)=\"cameraWasSwitched($event)\"\n\t\t (initError)=\"handleInitError($event)\"></webcam>\n\n              <ion-button *ngIf=\"snapshot == ''\" expand=\"block\" (click)=\"triggerSnapshot()\">\n                <ion-icon slot=\"start\" name=\"camera-outline\"></ion-icon>\n                ADD PATIENT PHOTO\n              </ion-button>\n              <ion-button color=\"warning\" *ngIf=\"snapshot != ''\" expand=\"block\" (click)=\"retakePhoto()\">\n                <ion-icon slot=\"start\" name=\"camera-reverse-outline\"></ion-icon>\n                RETAKE PATIENT PHOTO\n              </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-fab *ngIf=\"isNewPatient\" mode=\"ios\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"save()\" color=\"success\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab *ngIf=\"!isNewPatient\" mode=\"ios\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"edit()\" color=\"success\">\n      <ion-icon name=\"create\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "QKVY":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js ***!
  \*********************************************************************/
/*! exports provided: WebcamComponent, WebcamImage, WebcamInitError, WebcamMirrorProperties, WebcamModule, WebcamUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamComponent", function() { return WebcamComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamImage", function() { return WebcamImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamInitError", function() { return WebcamInitError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamMirrorProperties", function() { return WebcamMirrorProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamModule", function() { return WebcamModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamUtil", function() { return WebcamUtil; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */



const _c0 = ["video"];
const _c1 = ["canvas"];
function WebcamComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebcamComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.rotateVideoInput(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WebcamImage {
    constructor(imageAsDataUrl, mimeType, imageData) {
        this._mimeType = null;
        this._imageAsBase64 = null;
        this._imageAsDataUrl = null;
        this._imageData = null;
        this._mimeType = mimeType;
        this._imageAsDataUrl = imageAsDataUrl;
        this._imageData = imageData;
    }
    /**
     * Extracts the Base64 data out of the given dataUrl.
     * @param dataUrl the given dataUrl
     * @param mimeType the mimeType of the data
     */
    static getDataFromDataUrl(dataUrl, mimeType) {
        return dataUrl.replace(`data:${mimeType};base64,`, '');
    }
    /**
     * Get the base64 encoded image data
     * @returns base64 data of the image
     */
    get imageAsBase64() {
        return this._imageAsBase64 ? this._imageAsBase64
            : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
    }
    /**
     * Get the encoded image as dataUrl
     * @returns the dataUrl of the image
     */
    get imageAsDataUrl() {
        return this._imageAsDataUrl;
    }
    /**
     * Get the ImageData object associated with the canvas' 2d context.
     * @returns the ImageData of the canvas's 2d context.
     */
    get imageData() {
        return this._imageData;
    }
}

class WebcamUtil {
    /**
     * Lists available videoInput devices
     * @returns a list of media device info.
     */
    static getAvailableVideoInputs() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return Promise.reject('enumerateDevices() not supported.');
        }
        return new Promise((resolve, reject) => {
            navigator.mediaDevices.enumerateDevices()
                .then((devices) => {
                resolve(devices.filter((device) => device.kind === 'videoinput'));
            })
                .catch(err => {
                reject(err.message || err);
            });
        });
    }
}

class WebcamComponent {
    constructor() {
        /** Defines the max width of the webcam area in px */
        this.width = 640;
        /** Defines the max height of the webcam area in px */
        this.height = 480;
        /** Defines base constraints to apply when requesting video track from UserMedia */
        this.videoOptions = WebcamComponent.DEFAULT_VIDEO_OPTIONS;
        /** Flag to enable/disable camera switch. If enabled, a switch icon will be displayed if multiple cameras were found */
        this.allowCameraSwitch = true;
        /** Flag to control whether an ImageData object is stored into the WebcamImage object. */
        this.captureImageData = false;
        /** The image type to use when capturing snapshots */
        this.imageType = WebcamComponent.DEFAULT_IMAGE_TYPE;
        /** The image quality to use when capturing snapshots (number between 0 and 1) */
        this.imageQuality = WebcamComponent.DEFAULT_IMAGE_QUALITY;
        /** EventEmitter which fires when an image has been captured */
        this.imageCapture = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits a mediaError if webcam cannot be initialized (e.g. missing user permissions) */
        this.initError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the webcam video was clicked */
        this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits the active deviceId after the active video device was switched */
        this.cameraSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** available video devices */
        this.availableVideoInputs = [];
        /** Indicates whether the video device is ready to be switched */
        this.videoInitialized = false;
        /** Index of active video in availableVideoInputs */
        this.activeVideoInputIndex = -1;
        /** MediaStream object in use for streaming UserMedia data */
        this.mediaStream = null;
        /** width and height of the active video stream */
        this.activeVideoSettings = null;
    }
    /**
     * If the given Observable emits, an image will be captured and emitted through 'imageCapture' EventEmitter
     */
    set trigger(trigger) {
        if (this.triggerSubscription) {
            this.triggerSubscription.unsubscribe();
        }
        // Subscribe to events from this Observable to take snapshots
        this.triggerSubscription = trigger.subscribe(() => {
            this.takeSnapshot();
        });
    }
    /**
     * If the given Observable emits, the active webcam will be switched to the one indicated by the emitted value.
     * @param switchCamera Indicates which webcam to switch to
     *   true: cycle forwards through available webcams
     *   false: cycle backwards through available webcams
     *   string: activate the webcam with the given id
     */
    set switchCamera(switchCamera) {
        if (this.switchCameraSubscription) {
            this.switchCameraSubscription.unsubscribe();
        }
        // Subscribe to events from this Observable to switch video device
        this.switchCameraSubscription = switchCamera.subscribe((value) => {
            if (typeof value === 'string') {
                // deviceId was specified
                this.switchToVideoInput(value);
            }
            else {
                // direction was specified
                this.rotateVideoInput(value !== false);
            }
        });
    }
    /**
     * Get MediaTrackConstraints to request streaming the given device
     * @param deviceId
     * @param baseMediaTrackConstraints base constraints to merge deviceId-constraint into
     * @returns
     */
    static getMediaConstraintsForDevice(deviceId, baseMediaTrackConstraints) {
        const result = baseMediaTrackConstraints ? baseMediaTrackConstraints : this.DEFAULT_VIDEO_OPTIONS;
        if (deviceId) {
            result.deviceId = { exact: deviceId };
        }
        return result;
    }
    /**
     * Tries to harvest the deviceId from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the id.
     * @param mediaStreamTrack
     * @returns deviceId if found in the mediaStreamTrack
     */
    static getDeviceIdFromMediaStreamTrack(mediaStreamTrack) {
        if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().deviceId) {
            return mediaStreamTrack.getSettings().deviceId;
        }
        else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().deviceId) {
            const deviceIdObj = mediaStreamTrack.getConstraints().deviceId;
            return WebcamComponent.getValueFromConstrainDOMString(deviceIdObj);
        }
    }
    /**
     * Tries to harvest the facingMode from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the value.
     * @param mediaStreamTrack
     * @returns facingMode if found in the mediaStreamTrack
     */
    static getFacingModeFromMediaStreamTrack(mediaStreamTrack) {
        if (mediaStreamTrack) {
            if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().facingMode) {
                return mediaStreamTrack.getSettings().facingMode;
            }
            else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().facingMode) {
                const facingModeConstraint = mediaStreamTrack.getConstraints().facingMode;
                return WebcamComponent.getValueFromConstrainDOMString(facingModeConstraint);
            }
        }
    }
    /**
     * Determines whether the given mediaStreamTrack claims itself as user facing
     * @param mediaStreamTrack
     */
    static isUserFacing(mediaStreamTrack) {
        const facingMode = WebcamComponent.getFacingModeFromMediaStreamTrack(mediaStreamTrack);
        return facingMode ? 'user' === facingMode.toLowerCase() : false;
    }
    /**
     * Extracts the value from the given ConstrainDOMString
     * @param constrainDOMString
     */
    static getValueFromConstrainDOMString(constrainDOMString) {
        if (constrainDOMString) {
            if (constrainDOMString instanceof String) {
                return String(constrainDOMString);
            }
            else if (Array.isArray(constrainDOMString) && Array(constrainDOMString).length > 0) {
                return String(constrainDOMString[0]);
            }
            else if (typeof constrainDOMString === 'object') {
                if (constrainDOMString['exact']) {
                    return String(constrainDOMString['exact']);
                }
                else if (constrainDOMString['ideal']) {
                    return String(constrainDOMString['ideal']);
                }
            }
        }
        return null;
    }
    ngAfterViewInit() {
        this.detectAvailableDevices()
            .then(() => {
            // start video
            this.switchToVideoInput(null);
        })
            .catch((err) => {
            this.initError.next({ message: err });
            // fallback: still try to load webcam, even if device enumeration failed
            this.switchToVideoInput(null);
        });
    }
    ngOnDestroy() {
        this.stopMediaTracks();
        this.unsubscribeFromSubscriptions();
    }
    /**
     * Takes a snapshot of the current webcam's view and emits the image as an event
     */
    takeSnapshot() {
        // set canvas size to actual video size
        const _video = this.nativeVideoElement;
        const dimensions = { width: this.width, height: this.height };
        if (_video.videoWidth) {
            dimensions.width = _video.videoWidth;
            dimensions.height = _video.videoHeight;
        }
        const _canvas = this.canvas.nativeElement;
        _canvas.width = dimensions.width;
        _canvas.height = dimensions.height;
        // paint snapshot image to canvas
        const context2d = _canvas.getContext('2d');
        context2d.drawImage(_video, 0, 0);
        // read canvas content as image
        const mimeType = this.imageType ? this.imageType : WebcamComponent.DEFAULT_IMAGE_TYPE;
        const quality = this.imageQuality ? this.imageQuality : WebcamComponent.DEFAULT_IMAGE_QUALITY;
        const dataUrl = _canvas.toDataURL(mimeType, quality);
        // get the ImageData object from the canvas' context.
        let imageData = null;
        if (this.captureImageData) {
            imageData = context2d.getImageData(0, 0, _canvas.width, _canvas.height);
        }
        this.imageCapture.next(new WebcamImage(dataUrl, mimeType, imageData));
    }
    /**
     * Switches to the next/previous video device
     * @param forward
     */
    rotateVideoInput(forward) {
        if (this.availableVideoInputs && this.availableVideoInputs.length > 1) {
            const increment = forward ? 1 : (this.availableVideoInputs.length - 1);
            const nextInputIndex = (this.activeVideoInputIndex + increment) % this.availableVideoInputs.length;
            this.switchToVideoInput(this.availableVideoInputs[nextInputIndex].deviceId);
        }
    }
    /**
     * Switches the camera-view to the specified video device
     */
    switchToVideoInput(deviceId) {
        this.videoInitialized = false;
        this.stopMediaTracks();
        this.initWebcam(deviceId, this.videoOptions);
    }
    /**
     * Event-handler for video resize event.
     * Triggers Angular change detection so that new video dimensions get applied
     */
    videoResize() {
        // here to trigger Angular change detection
    }
    get videoWidth() {
        const videoRatio = this.getVideoAspectRatio();
        return Math.min(this.width, this.height * videoRatio);
    }
    get videoHeight() {
        const videoRatio = this.getVideoAspectRatio();
        return Math.min(this.height, this.width / videoRatio);
    }
    get videoStyleClasses() {
        let classes = '';
        if (this.isMirrorImage()) {
            classes += 'mirrored ';
        }
        return classes.trim();
    }
    get nativeVideoElement() {
        return this.video.nativeElement;
    }
    /**
     * Returns the video aspect ratio of the active video stream
     */
    getVideoAspectRatio() {
        // calculate ratio from video element dimensions if present
        const videoElement = this.nativeVideoElement;
        if (videoElement.videoWidth && videoElement.videoWidth > 0 &&
            videoElement.videoHeight && videoElement.videoHeight > 0) {
            return videoElement.videoWidth / videoElement.videoHeight;
        }
        // nothing present - calculate ratio based on width/height params
        return this.width / this.height;
    }
    /**
     * Init webcam live view
     */
    initWebcam(deviceId, userVideoTrackConstraints) {
        const _video = this.nativeVideoElement;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // merge deviceId -> userVideoTrackConstraints
            const videoTrackConstraints = WebcamComponent.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);
            navigator.mediaDevices.getUserMedia({ video: videoTrackConstraints })
                .then((stream) => {
                this.mediaStream = stream;
                _video.srcObject = stream;
                _video.play();
                this.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
                const activeDeviceId = WebcamComponent.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);
                this.cameraSwitched.next(activeDeviceId);
                // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
                // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.
                this.detectAvailableDevices()
                    .then(() => {
                    this.activeVideoInputIndex = activeDeviceId ? this.availableVideoInputs
                        .findIndex((mediaDeviceInfo) => mediaDeviceInfo.deviceId === activeDeviceId) : -1;
                    this.videoInitialized = true;
                })
                    .catch(() => {
                    this.activeVideoInputIndex = -1;
                    this.videoInitialized = true;
                });
            })
                .catch((err) => {
                this.initError.next({ message: err.message, mediaStreamError: err });
            });
        }
        else {
            this.initError.next({ message: 'Cannot read UserMedia from MediaDevices.' });
        }
    }
    getActiveVideoTrack() {
        return this.mediaStream ? this.mediaStream.getVideoTracks()[0] : null;
    }
    isMirrorImage() {
        if (!this.getActiveVideoTrack()) {
            return false;
        }
        // check for explicit mirror override parameter
        {
            let mirror = 'auto';
            if (this.mirrorImage) {
                if (typeof this.mirrorImage === 'string') {
                    mirror = String(this.mirrorImage).toLowerCase();
                }
                else {
                    // WebcamMirrorProperties
                    if (this.mirrorImage.x) {
                        mirror = this.mirrorImage.x.toLowerCase();
                    }
                }
            }
            switch (mirror) {
                case 'always':
                    return true;
                case 'never':
                    return false;
            }
        }
        // default: enable mirroring if webcam is user facing
        return WebcamComponent.isUserFacing(this.getActiveVideoTrack());
    }
    /**
     * Stops all active media tracks.
     * This prevents the webcam from being indicated as active,
     * even if it is no longer used by this component.
     */
    stopMediaTracks() {
        if (this.mediaStream && this.mediaStream.getTracks) {
            // getTracks() returns all media tracks (video+audio)
            this.mediaStream.getTracks()
                .forEach((track) => track.stop());
        }
    }
    /**
     * Unsubscribe from all open subscriptions
     */
    unsubscribeFromSubscriptions() {
        if (this.triggerSubscription) {
            this.triggerSubscription.unsubscribe();
        }
        if (this.switchCameraSubscription) {
            this.switchCameraSubscription.unsubscribe();
        }
    }
    /**
     * Reads available input devices
     */
    detectAvailableDevices() {
        return new Promise((resolve, reject) => {
            WebcamUtil.getAvailableVideoInputs()
                .then((devices) => {
                this.availableVideoInputs = devices;
                resolve(devices);
            })
                .catch(err => {
                this.availableVideoInputs = [];
                reject(err);
            });
        });
    }
}
WebcamComponent.ɵfac = function WebcamComponent_Factory(t) { return new (t || WebcamComponent)(); };
WebcamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebcamComponent, selectors: [["webcam"]], viewQuery: function WebcamComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, inputs: { width: "width", height: "height", videoOptions: "videoOptions", allowCameraSwitch: "allowCameraSwitch", captureImageData: "captureImageData", imageType: "imageType", imageQuality: "imageQuality", trigger: "trigger", switchCamera: "switchCamera", mirrorImage: "mirrorImage" }, outputs: { imageCapture: "imageCapture", initError: "initError", imageClick: "imageClick", cameraSwitched: "cameraSwitched" }, decls: 6, vars: 7, consts: [[1, "webcam-wrapper", 3, "click"], ["autoplay", "", "muted", "", "playsinline", "", 3, "width", "height", "resize"], ["video", ""], ["class", "camera-switch", 3, "click", 4, "ngIf"], [3, "width", "height"], ["canvas", ""], [1, "camera-switch", 3, "click"]], template: function WebcamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebcamComponent_Template_div_click_0_listener() { return ctx.imageClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function WebcamComponent_Template_video_resize_1_listener() { return ctx.videoResize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WebcamComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.videoStyleClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.videoWidth)("height", ctx.videoHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowCameraSwitch && ctx.availableVideoInputs.length > 1 && ctx.videoInitialized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".webcam-wrapper[_ngcontent-%COMP%]{display:inline-block;line-height:0;position:relative}.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%]{transform:scaleX(-1)}.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC\");background-position:50%;background-repeat:no-repeat;background-size:80%;border-radius:5px;cursor:pointer;height:48px;position:absolute;right:13px;top:10px;transition:background-color .2s ease;width:48px}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.18)}"] });
WebcamComponent.DEFAULT_VIDEO_OPTIONS = { facingMode: 'environment' };
WebcamComponent.DEFAULT_IMAGE_TYPE = 'image/jpeg';
WebcamComponent.DEFAULT_IMAGE_QUALITY = 0.92;
WebcamComponent.propDecorators = {
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    videoOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allowCameraSwitch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mirrorImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    captureImageData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageCapture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    initError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    imageClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cameraSwitched: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['video', { static: true },] }],
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['canvas', { static: true },] }],
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    switchCamera: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebcamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'webcam',
                template: "<div class=\"webcam-wrapper\" (click)=\"imageClick.next();\">\r\n  <video #video [width]=\"videoWidth\" [height]=\"videoHeight\" [class]=\"videoStyleClasses\" autoplay muted playsinline (resize)=\"videoResize()\"></video>\r\n  <div class=\"camera-switch\" *ngIf=\"allowCameraSwitch && availableVideoInputs.length > 1 && videoInitialized\" (click)=\"rotateVideoInput(true)\"></div>\r\n  <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n</div>\r\n",
                styles: [".webcam-wrapper{display:inline-block;line-height:0;position:relative}.webcam-wrapper video.mirrored{transform:scaleX(-1)}.webcam-wrapper canvas{display:none}.webcam-wrapper .camera-switch{background-color:rgba(0,0,0,.1);background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC\");background-position:50%;background-repeat:no-repeat;background-size:80%;border-radius:5px;cursor:pointer;height:48px;position:absolute;right:13px;top:10px;transition:background-color .2s ease;width:48px}.webcam-wrapper .camera-switch:hover{background-color:rgba(0,0,0,.18)}"]
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], videoOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowCameraSwitch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], captureImageData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageQuality: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], initError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], imageClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cameraSwitched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], switchCamera: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mirrorImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['video', { static: true }]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas', { static: true }]
        }] }); })();

const COMPONENTS = [
    WebcamComponent
];
class WebcamModule {
}
WebcamModule.ɵfac = function WebcamModule_Factory(t) { return new (t || WebcamModule)(); };
WebcamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WebcamModule });
WebcamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WebcamModule, { declarations: function () { return [WebcamComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [WebcamComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebcamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    COMPONENTS
                ],
                exports: [
                    COMPONENTS
                ]
            }]
    }], null, null); })();

class WebcamInitError {
    constructor() {
        this.message = null;
        this.mediaStreamError = null;
    }
}

class WebcamMirrorProperties {
}

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-webcam.js.map

/***/ }),

/***/ "gpqs":
/*!*****************************************!*\
  !*** ./src/app/patient/patient.page.ts ***!
  \*****************************************/
/*! exports provided: PatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPage", function() { return PatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_patient_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./patient.page.html */ "KwmR");
/* harmony import */ var _patient_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient.page.scss */ "BZTz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webcam */ "QKVY");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../server */ "U8hz");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");












let PatientPage = class PatientPage {
    constructor(route, loadingCtrl, alertCtrl, router, storage) {
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.storage = storage;
        this.pictureTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isNewPatient = true;
        this.snapshot = '';
        this.data = {
            name: '',
            enName: '',
            gender: null,
            address: '...',
            dob: null,
            phone: null,
            weight: 0,
            height: 0,
            relationship: 0,
            nationalityId: 0,
            documentId: null,
            email: '',
            smoker: 0,
            fasting: 0,
            munaId: null,
            certificateNo: null,
            legal: 1,
            createdBy: '1',
            documentPhoto: {
                photoPath: ''
            }
        };
        this.files = null;
        this.documentImage = '';
        this.muna = false;
        this.documentName = '';
        this.api = _server__WEBPACK_IMPORTED_MODULE_9__["api"];
        this.nationalities = [];
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    showNextWebcam(directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }
    handleImage(webcamImage) {
        console.info('received webcam image', webcamImage);
        this.pictureTaken.emit(webcamImage);
        this.snapshot = webcamImage.imageAsDataUrl;
        this.toggleWebcam();
        // axios.post(api + 'upload',{
        //   image: webcamImage
        // }).then(res => {
        //   console.log(res);
        // })
    }
    cameraWasSwitched(deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
    ngOnInit() {
        console.log(this.id);
        this.storage.get("user").then(res => {
            this.userinfo = res.data;
            console.log(this.userinfo);
            this.data.createdBy = res.data.idUser;
        });
        axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_server__WEBPACK_IMPORTED_MODULE_9__["api"] + 'nationalities').then(res => {
            this.nationalities = res.data;
        }).catch(err => {
            console.log(err);
        });
        ngx_webcam__WEBPACK_IMPORTED_MODULE_7__["WebcamUtil"].getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
        this.route.paramMap.subscribe((param) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (param['params']['id'] != 'new') {
                let loading = yield this.loadingCtrl.create({
                    message: 'Please wait...'
                });
                yield loading.present();
                this.isNewPatient = false;
                axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_server__WEBPACK_IMPORTED_MODULE_9__["api"] + 'patient/' + param['params']['id']).then(res => {
                    this.data = res.data;
                    this.snapshot = _server__WEBPACK_IMPORTED_MODULE_9__["api"] + res.data.image.photoPath;
                    this.toggleWebcam();
                }).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield loading.dismiss();
                }));
            }
        }));
    }
    retakePhoto() {
        this.snapshot = '';
        this.toggleWebcam();
    }
    onFileChange(event) {
        this.files = event.target.files;
        console.log(event.target.files[0]);
        this.documentName = event.target.files[0]['name'];
    }
    fixDate() {
        this.data.dob = moment__WEBPACK_IMPORTED_MODULE_10__(this.data.dob).format('YYYY-MM-DD');
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            yield loading.present();
            if (this.muna) {
                let munaData = {
                    data: {
                        type: "identity",
                        attributes: {
                            //email: this.data.email,
                            passport: this.data.documentId,
                        },
                    },
                };
                // CHECK IF PASSPORT EXISTS
                axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://api.munahealth.com/identities?filter[passport]=' + this.data.documentId).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let ptnt = res.data.data;
                    if (ptnt.length > 0) {
                        this.data.munaId = ptnt[0].attributes.address;
                        this.saveToDb();
                    }
                    else {
                        console.log(JSON.stringify(munaData));
                        axios__WEBPACK_IMPORTED_MODULE_8___default.a
                            .post(_server__WEBPACK_IMPORTED_MODULE_9__["munaApi"] + "identities", JSON.stringify(munaData))
                            .then((response) => {
                            this.data.munaId = response.data.data.id;
                            this.saveToDb();
                        })
                            .catch((error) => {
                            console.log(error);
                        });
                    }
                })).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield loading.dismiss();
                }));
            }
            else {
                this.saveToDb();
                yield loading.dismiss();
            }
        });
    }
    ionViewWillLeave() {
        if (this.snapshot == '') {
            this.showWebcam = false;
        }
    }
    edit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.data.createdBy = '1';
            let loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            yield loading.present();
            axios__WEBPACK_IMPORTED_MODULE_8___default.a.put(_server__WEBPACK_IMPORTED_MODULE_9__["api"] + 'patient/' + this.data['idPatient'], this.data).then(res => {
                console.log(res.data);
            }).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
            }));
        });
    }
    saveToDb() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var bodyFormData = new FormData();
            console.log(this.data);
            this.data.nationalityId = this.data.nationalityId['idNationality'];
            if (this.userinfo['roleId'] == 5) {
                this.data.legal = 0;
            }
            bodyFormData.append('patient', JSON.stringify(this.data));
            bodyFormData.append('image', this.snapshot);
            if (this.files != null) {
                bodyFormData.append('document', this.files[0]);
            }
            axios__WEBPACK_IMPORTED_MODULE_8___default()({
                method: "post",
                url: _server__WEBPACK_IMPORTED_MODULE_9__["api"] + 'addPatient',
                data: bodyFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(response);
                let patient = response.data;
                let message = yield this.alertCtrl.create({
                    header: 'Patient added successfully.',
                    message: 'Do you want to submit a new test for this patient?',
                    buttons: [
                        {
                            text: 'Yes',
                            handler: () => {
                                // ADD TEST
                                this.router.navigateByUrl('/patients/' + patient.id + '/tests');
                            }
                        },
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: () => {
                                this.router.navigateByUrl('/patients');
                            }
                        }
                    ]
                });
                yield message.present();
            }))
                .catch((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let message = yield this.alertCtrl.create({
                    header: 'Error',
                    subHeader: 'Please check all required fields.'
                });
                yield message.present();
            })).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
        });
    }
    generateEmail() {
        this.data.email = this.data.documentId + '.nationallab@gmail.com';
    }
};
PatientPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__["Storage"] }
];
PatientPage.propDecorators = {
    pictureTaken: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PatientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-patient',
        template: _raw_loader_patient_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_patient_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PatientPage);



/***/ })

}]);
//# sourceMappingURL=default~patient-patient-module~patients-patients-module.js.map