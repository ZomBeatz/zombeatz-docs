---
description: "Scan serials, part numbers and MACs from labels with your phone's camera in Zom's HaRM, and print QR labels that open the device."
---

# Scanning and labels

Read serial numbers, part numbers and MAC addresses from labels with your phone's camera instead of typing them, and print QR stickers that open a device in HaRM.

## Scanning a field

Fields like **Serial number**, **Part number**, **Model**, **MAC address** and **Asset tag** have a camera button. Point it at the label: barcodes and QR codes are read on the phone, and printed text is read too. Tap the value you want.

## Scanning a whole label

**Scan label** at the top of the device and part forms reads everything on a label and lets you send each value to the right field. Labelled values (S/N:, P/N:, MAC) are matched for you.

## Starting from a label

**+ New** has:

- **New part from label** and **New device from label**: the form opens with the camera ready.
- **Scan a HaRM label (open device)**: opens the device a QR sticker belongs to.
- **Scan text or barcode (copy it)**: reads anything and copies it.

<div class="phone-shots">

![The + New menu on a phone](/img/harm/phone-new-menu.png)
![A part form with camera buttons](/img/harm/phone-part-form.png)
![The label scanner](/img/harm/phone-scanner.png)

</div>

**Live camera** reads barcodes as you point; **Take or choose photo** works when the live camera can't (older phones, or the camera permission was refused).

The camera needs HTTPS, so set your phone up first: [Phones and tablets](./phones-and-tablets). Photos are never stored.

On the HaRM computer, installing `zbar` and `tesseract` adds server-side barcode and text reading for photos the phone can't read itself.

## QR labels

Print stickers with the device's name, model, serial, IP and a QR code that opens it in HaRM: **⋯ > Print label…** on a device, or **Export & Share > QR labels** for many at once. They print from your browser; choose your label sheet or printer in the print dialog.

## Related

- [AI Assist](./ai-assist)
- [Export and share](./export-and-share)
