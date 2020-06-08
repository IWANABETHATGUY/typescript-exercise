// This enabled module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.
    function pad(a: number): string;
    interface DateDetails {
        hours: number;
    }
}
