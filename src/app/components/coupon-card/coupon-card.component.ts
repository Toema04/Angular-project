import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/angular-fontawesome/types';
import { ClipboardService } from 'ngx-clipboard';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrls: ['./coupon-card.component.scss'],
})
export class CouponCardComponent implements OnInit {
  couponUrl = 'www.tazkty.com/473847';
  qrCodeDataUrl: string = '';
  faTrash: IconProp = "function";

  constructor(private clipboardService: ClipboardService) {}

  ngOnInit() {
    this.generateQRCode();
  }

  copyToClipboard() {
    this.clipboardService.copy(this.couponUrl);
    // You can add a toast notification here to inform the user
    alert('Copied to clipboard!');
  }

  async generateQRCode() {
    try {
      this.qrCodeDataUrl = await QRCode.toDataURL(this.couponUrl);
    } catch (err) {
      console.error('Error generating QR code', err);
    }
  }
}
