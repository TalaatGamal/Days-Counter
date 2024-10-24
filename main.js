   // يمكنك تحديد تاريخ ووقت البداية هنا (السنة، الشهر، اليوم، الساعة، الدقيقة، الثانية)
        // لاحظ أن الشهر يبدأ من 0 (يناير = 0، فبراير = 1، وهكذا)
        const startDate = new Date(2024, 9, 24, 13, 0, 0); // هذا مثال على 24 أكتوبر 2023 الساعة 12:00:00

        function updateTime() {
            // احصل على تاريخ ووقت اللحظة الحالية
            const currentDate = new Date();
            
            // حساب الفرق بالميلي ثانية
            const diffTime = currentDate - startDate;
            
            // تحويل الفرق إلى وحدات الوقت المناسبة
            const diffSeconds = Math.floor(diffTime / 1000);
            const diffMinutes = Math.floor(diffSeconds / 60);
            const diffHours = Math.floor(diffMinutes / 60);
            const diffDays = Math.floor(diffHours / 24);
            
            // استخراج الوحدات بشكل منفصل
            const seconds = diffSeconds % 60;
            const minutes = diffMinutes % 60;
            const hours = diffHours % 24;
            const days = diffDays;
            
            // تحديث العداد في الصفحة
            document.getElementById('days-count').innerText = days;
            document.getElementById('hours-count').innerText = hours;
            document.getElementById('minutes-count').innerText = minutes;
            document.getElementById('seconds-count').innerText = seconds;
        }

        // تحديث العداد كل ثانية
        setInterval(updateTime, 1000);

        // تحديث الوقت عند تحميل الصفحة لأول مرة
        updateTime();