---
id: vpn
title: 📡 VPN
sidebar_position: 11
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Vi har ett WireGuard VPN uppsatt på kontorets nätverk.

Alla ska ha en personlig konfigurationsfil i Bitwarden under Our Studio -> Personliga secrets -> \[Ditt Namn\] -> vpn wireguard kg57 -> Attachments -> `os0.conf`

<Tabs>
<TabItem value="macos" label="macOS" default>

Installera [WireGuard från App Store](https://itunes.apple.com/us/app/wireguard/id1451685025?ls=1&mt=12), importera konfig-filen och tuta och köra.

</TabItem>
<TabItem value="linux" label="Ubuntu/Debian">

1. Installera WireGuard om det inte är installerat
    ```
    sudo apt install wireguard
    ```
2. Ladda hem `os0.conf` från bitwarden
3. Importera konfig-filen
    ```
    nmcli connection import type wireguard file os0.conf
    ```
4. Ta bort konfig-filen eftersom den innehåller hemligheter
    ```
    rm os0.conf
    ```
5. Stäng av autoconnect (av någon anledning är den på som default)
    ```
    nmcli connection modify os0 autoconnect off
    ```
6. Starta VPN
    ```
    nmcli connection up os0
    ```
7. Testa att det fungerar, svaret borde vara `158.174.170.218`
    ```
    curl ifconfig.me
    ```
8. Stäng av VPN
    ```
    nmcli connection down os0
    ```

</TabItem>
<TabItem value="other" label="Andra OS">

För andra operativsystem finns det instruktioner hos [WireGuard](https://www.wireguard.com/install/).

</TabItem>
</Tabs>

## Vanliga problem
```
If you get an error saying 'wg0 is strictly unmanaged', then you need NM to enable managing wg0 interface.
#cp /usr/lib/NetworkManager/conf.d/10-globally-managed-devices.conf /etc/NetworkManager/conf.d/
Then edit /etc/NetworkManager/conf.d/10-globally-managed-devices.conf and add except:type:wireguard:
unmanaged-devices=*,except:type:wifi,except:type:gsm,except:type:cdma,except:type:wireguard
```
